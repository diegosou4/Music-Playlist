import { Body, Controller, Get, Param , Post} from '@nestjs/common';
import { PrismaService } from './../database/primas.service';
import { Track } from 'generated/prisma';
import { TrackDto } from 'src/dto/track.dto';

@Controller('track')
export class TrackController {
    constructor(private prisma: PrismaService) {}

   @Get('all')
   async getAllTracks(): Promise<Track[]> {
        if (!this.prisma.track) {
            throw new Error('Track model is not defined on PrismaService');
        }
        const tracks = await this.prisma.track.findMany();
        return tracks;
    }

    @Get(':id')
    async getTrackById(@Param('id') id: string): Promise<Track> {
        const track = await this.prisma.track.findUnique({
            where: { id: id },
        });
        if (!track) {
            throw new Error(`Track with id ${id} not found`);
        }
        return track;
    }

    @Post('create-track')
    async createTrack(@Body() trackData: TrackDto): Promise<Track> {
        if (!this.prisma.track) {
            throw new Error('Track model is not defined on PrismaService');
        }
        if(trackData.albumId)
        {
            
        }
    }




}



