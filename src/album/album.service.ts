import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateAlbumDto } from '../dto/create-album.dto';


@Injectable()  
export class AlbumService {
    constructor(private readonly prismaService: PrismaService) {}

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
        return this.prismaService.album.create({
            data: {
                name: albumData.name,
                artist: albumData.artistId,
                genreId: albumData.genreId,
            },
        });
    }

}