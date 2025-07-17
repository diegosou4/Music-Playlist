import {  Controller, Get, Param } from '@nestjs/common';
import { Track } from 'generated/prisma';
import { TrackService}  from './track.service';


@Controller('track')
export class TrackController {
    constructor(private TrackService : TrackService) {}


    // @Post('create-track')
    // async createTrack(@Body() trackData: TrackDto): Promise<Track> {
    //     return this.TrackService.createTrack(trackData);
        
    // }

    @Get('get-all-tracks')
    async getAllTracks(): Promise<Track[]> {
        return this.TrackService.getAllTracks();
    }

    @Get(':id')
    async getTrackById(@Param('id') id: string): Promise<Track> {
        return this.TrackService.getTrackById(id);
    }

}



