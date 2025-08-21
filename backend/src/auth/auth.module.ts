import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserAuthModule } from 'src/UserAuth/UserAuth.module';


@Module({
  imports: [JwtModule.registerAsync({
    useFactory: async () => ({
      global: true,
      imports: [],
      useFactory : async (configService: ConfigService) =>({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: +(configService.get<number>('JWT_EXPIRATION_TIME') ?? 3600) },
      }),
      inject: [ConfigService],
    }),
  }), UserAuthModule ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
