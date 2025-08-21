import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { AuthResponseDTO, RegisterResponseDTO } from 'src/dto/auth.dto';
import { UserAuthService } from 'src/UserAuth/UserAuth.service';

import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly jwtService: JwtService,
        private userAuthService: UserAuthService,
        private readonly configService: ConfigService
    ) {
        this.jwtExpirationTimeInSeconds = this.configService.get<number>('JWT_EXPIRATION_TIME') || 3600;
    }

    async sigIn(username: string, password: string) : Promise<AuthResponseDTO> {
       const foundUser =  await  this.userAuthService.findByUsername(username);
    
       if (!foundUser || !bcryptCompareSync(password, foundUser.password)) {
           throw new UnauthorizedException();
       }

         const payload = { sub: foundUser.id, username: foundUser.username };
       
         const jwtSecret = this.configService.get<string>('JWT_SECRET');
         
         if (!jwtSecret) {
             throw new Error('JWT_SECRET is not defined in environment variables');
         }
         const token = this.jwtService.sign(payload, { secret: jwtSecret });

         return { accessToken : token, expiresIn: this.jwtExpirationTimeInSeconds };
    }

    async register(registerData : RegisterResponseDTO): Promise<AuthResponseDTO> {

        const createdUser = await this.userAuthService.createUser(registerData);

        const token = await this.sigIn(createdUser.username, registerData.password);

        return token; 

    }
}
