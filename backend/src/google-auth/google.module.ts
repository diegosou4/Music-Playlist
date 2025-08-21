import { GoogleStrategy } from './google.strategy';
import { Module } from '@nestjs/common';
import { GoogleController } from './google.controller';
import { GoogleService } from './google.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [GoogleController],
  providers: [GoogleService, GoogleStrategy],
})

export class GoogleModule {}