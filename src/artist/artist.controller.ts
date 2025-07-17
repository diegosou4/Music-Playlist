import { Controller,Get, Param , Body, Post} from '@nestjs/common';
import { ArtistService } from './artist.service';
import { Artist } from 'generated/prisma';
import { CreateArtistDto } from '../dto/create-artist.dto';

@Controller('artist')
export class ArtistController {
    constructor(private readonly ArtistService: ArtistService) {}


    @Get('all')
    async getAllArtists() : Promise<Artist[]> {
        return this.ArtistService.getAllArtists();
    }

    @Get(':id')
    async getArtistById(@Param('id') id: string): Promise<Artist> {
        return this.ArtistService.getArtistById(id);
    }

    @Post('create-artist')
    async createArtist(@Body() artistData: CreateArtistDto): Promise<Artist> {
        return this.ArtistService.createArtist(artistData);
    }
}
