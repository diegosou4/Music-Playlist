import { Module } from '@nestjs/common';
import { UserAuthController } from './UserAuth.controller';
import { UserAuthService } from './UserAuth.service';
import { PrismaModule } from 'src/database/prisma.module';






@Module({
  imports: [PrismaModule],
  controllers: [UserAuthController],
  providers: [ UserAuthService],
  exports: [UserAuthService]
})
export class UserAuthModule {}

