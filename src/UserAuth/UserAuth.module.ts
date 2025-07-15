import { Module } from '@nestjs/common';
import { PrismaService } from './../database/primas.service';
import { UserAuthController } from './UserAuth.controller';


@Module({
  imports: [],
  controllers: [UserAuthController],
  providers: [PrismaService],
})
export class UserAuthModule {}
