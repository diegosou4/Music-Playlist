import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { PrismaService } from './../database/primas.service';




@Module({
  controllers: [AlbumController],
  providers: [PrismaService],
})
export class AlbumModule {}
