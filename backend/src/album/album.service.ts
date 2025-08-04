import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { GenreService } from 'src/genre/genre.service';
import { ArtistService } from 'src/artist/artist.service';
import { NotFoundException } from '@nestjs/common';
import { MediaService } from 'src/media/media.service';
import { Response } from "express";


@Injectable()  
export class AlbumService {
    constructor(private readonly prismaService: PrismaService, 
                private readonly genreService: GenreService, 
                private readonly artistService: ArtistService,
                private readonly mediaService: MediaService
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
      async addImageToAlbum(albumId: string, image: Express.Multer.File) {
            if (!this.prismaService) {  
                throw new Error('PrismaService is not initialized');    
            }
        const albumPath = await this.mediaService.addImageToMedia(albumId, image);
        await this.prismaService.album.update({
            where: { id: albumId },
            data: { image: "images/" + albumId },
        });
        return albumPath;
    }
    async getAlbumImage(albumId: string, res: Response) {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        const album = await this.prismaService.album.findUnique({
            where: { id: albumId },
            select: { image: true },
        });
        if (!album || !album.image) {
            throw new NotFoundException(`Image for album with ID ${albumId} not found`);
        }
        return this.mediaService.downloadImage(album.image, res);
    }
}
