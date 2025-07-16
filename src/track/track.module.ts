import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { PrismaService } from './../database/primas.service';


@Module({
  controllers: [TrackController],
  providers: [PrismaService],
})
export class TrackModule {}
