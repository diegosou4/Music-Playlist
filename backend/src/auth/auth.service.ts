import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { AuthResponseDTO, RegisterResponseDTO , accessTokenDTO} from 'src/dto/auth.dto';
import { UserAuthService } from 'src/UserAuth/UserAuth.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
    private jwtSecret: string;
    private jwtRefreshSecret: string;
    
    constructor(
        private readonly jwtService: JwtService,
        private userAuthService: UserAuthService,
        private readonly configService: ConfigService
    ) {
        this.jwtSecret = this.configService.get<string>('JWT_SECRET') ?? '';
        this.jwtRefreshSecret = this.configService.get<string>('JWT_REFRESH_SECRET') ?? '';
    }

    async sigIn(username: string, password: string) : Promise<AuthResponseDTO> {
       const foundUser =  await  this.userAuthService.findByUsername(username);
    
       if (!foundUser || !bcryptCompareSync(password, foundUser.password)) {
           throw new UnauthorizedException();
       }

        const payload = { sub: foundUser.id, username: foundUser.username };
        
         if (!this.jwtSecret || !this.jwtRefreshSecret) {
             throw new Error('JWT_SECRET is not defined in environment variables');
         }
          const accessToken = this.jwtService.sign(payload, {
                secret: process.env.JWT_SECRET,
                expiresIn: '15m', 
                });

            const refreshToken = this.jwtService.sign(payload, {
                secret: process.env.JWT_REFRESH_SECRET,
                expiresIn: '7d', 
                });

         await this.userAuthService.updateRefreshToken(foundUser.id, refreshToken);

         return { accessToken : accessToken, refreshToken: refreshToken };
    }

    async register(registerData : RegisterResponseDTO): Promise<AuthResponseDTO> {

        const createdUser = await this.userAuthService.createUser(registerData);

        const token = await this.sigIn(createdUser.username, registerData.password);

        return token; 

    }

    async refreshToken(refreshToken: string): Promise<accessTokenDTO> {
        try{
            const payload = this.jwtService.verify(refreshToken, {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
            });

            const isValid = await this.userAuthService.validateRefreshToken(payload.sub, refreshToken);
            if (!isValid) {
            throw new UnauthorizedException('Invalid refresh token');
            }
             const newAccessToken = this.jwtService.sign(
                { sub: payload.sub, email: payload.email },
                {
                    secret: process.env.JWT_SECRET,
                    expiresIn: '15m',
                },
                );

                return { accessToken: newAccessToken };
            } catch (err) {
                throw new UnauthorizedException('Refresh token expired or invalid');
            }
            }

        

}
