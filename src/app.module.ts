import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/primas.service';
import { UserAuthModule } from './UserAuth/UserAuth.module';

@Module({
  imports: [UserAuthModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
