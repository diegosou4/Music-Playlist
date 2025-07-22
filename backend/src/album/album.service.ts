import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { GenreService } from 'src/genre/genre.service';
import { ArtistService } from 'src/artist/artist.service';
import { NotFoundException } from '@nestjs/common';


@Injectable()  
export class AlbumService {
    constructor(private readonly prismaService: PrismaService, 
                private readonly genreService: GenreService, 
                private readonly artistService: ArtistService
    ) {}
    

    async getAllAlbums() {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        return this.prismaService.album.findMany();
    }

    async createAlbum(albumData: CreateAlbumDto) {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }

        const [artist, genre] = await Promise.all([
            this.artistService.getArtistById(albumData.artistId),
            this.genreService.getGenreById(albumData.genreId),  
        ]);
        
        if (!artist) {
            throw new NotFoundException(`Artist with ID ${albumData.artistId} not found`);
        }
        if (!genre) {
            throw new NotFoundException(`Genre with ID ${albumData.genreId} not found`);
        }

        return this.prismaService.album.create({
            data: {
                name: albumData.name,
                artistId: albumData.artistId,
                genreId: albumData.genreId,
            },
        });
    }



}