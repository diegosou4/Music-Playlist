import {  Controller, Get, Param , Post, Body} from '@nestjs/common';
import { Track } from 'generated/prisma';
import { TrackService}  from './track.service';
import { TrackDto } from '../dto/track.dto'; // Assuming you have a DTO for track data


@Controller('track')
export class TrackController {
    constructor(
        private TrackService : TrackService,) {}


    @Post('create-track')
    async createTrack(@Body() trackData: TrackDto): Promise<Track> {
        return this.TrackService.createTrack(trackData);
        
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



