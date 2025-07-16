import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { PrismaService } from './../database/primas.service';


@Module({
  controllers: [GenreController],
  providers: [PrismaService],
})
export class GenreModule {}
