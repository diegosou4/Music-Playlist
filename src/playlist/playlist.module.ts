import { Module } from '@nestjs/common';
import { PrismaService } from './../database/primas.service';
import { PlaylistController } from './playlist.controller';

@Module({
    imports: [],
    controllers: [PlaylistController],
    providers: [PrismaService],


})
export class PlaylistModule {}
