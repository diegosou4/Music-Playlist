import { Controller, Post } from '@nestjs/common';
import { PrismaService } from './../database/primas.service';
import { Get } from '@nestjs/common';
import { Album } from 'generated/prisma'; // Adjust the import path as necessary

@Controller('album')
export class AlbumController {
    constructor(private readonly prismaService: PrismaService) {}


    @Get('all')
    async getAllAlbums() : Promise<Album[]> {
        if(!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        const albums = await this.prismaService.album.findMany();
        return albums;
    }

    @Post('create-album')
    async createAlbum(@Body() albumData: { name: string; artistId: string; image?: string }): Promise<Album> {



}
