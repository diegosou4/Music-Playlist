import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/primas.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
