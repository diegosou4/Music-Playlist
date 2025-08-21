import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UserAuthService } from "src/UserAuth/UserAuth.service";
import { UnauthorizedException } from "@nestjs/common/exceptions/unauthorized.exception";

@Injectable()
export class JwtRefreshMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private userAuthService: UserAuthService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers['authorization']?.split(' ')[1];
    console.log(req.headers['x-refresh-token']);
    const refreshToken = req.headers['x-refresh-token'] as string;

    const jwtSecret = this.configService.get('JWT_SECRET');
    const jwtRefreshSecret = this.configService.get('JWT_REFRESH_SECRET');

    try {
      if (accessToken) {
        const payload = await this.jwtService.verifyAsync(accessToken, { secret: jwtSecret });
        req['user'] = payload;
        return next();
      }
    } catch (err) {
      if (refreshToken) {
            try {
              const payload = await this.jwtService.verifyAsync(refreshToken, { secret: jwtRefreshSecret });

              const isValid = await this.userAuthService.validateRefreshToken(payload.sub, refreshToken);
              if (!isValid) throw new UnauthorizedException();

              const newAccessToken = this.jwtService.sign(
                { sub: payload.sub, email: payload.email },
                { secret: jwtSecret, expiresIn: '15m' }
              );

              res.setHeader('Authorization', `Bearer ${newAccessToken}`);
              req['user'] = payload;

              return next();
            } catch (err) {
              throw new UnauthorizedException('Refresh token inválido');
            }
          }
    }

    throw new UnauthorizedException('Access token expirado');
  }
}
