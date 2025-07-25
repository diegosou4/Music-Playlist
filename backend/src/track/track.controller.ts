import {  Controller, Get, Param , Post, Body} from '@nestjs/common';
import { Track } from 'generated/prisma';
import { TrackService}  from './track.service';
import { TrackDto } from '../dto/track.dto'; 
import { UploadedFile } from '@nestjs/common';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('track')
export class TrackController {
    constructor(
        private TrackService : TrackService,) {}


    @Post('create-track')
    @UseInterceptors(FileInterceptor('file'))
    async createTrack(@Body() trackData: TrackDto, @UploadedFile() file: Express.Multer.File): Promise<Track> {
        return this.TrackService.createTrack(trackData, file);
    }

    @Get('get-all-tracks')
    async getAllTracks(): Promise<Track[]> {
        return this.TrackService.getAllTracks();
    }

    @Get(':id')
    async getTrackById(@Param('id') id: string): Promise<Track> {
        return this.TrackService.getTrackById(id);
    }

}



