import { Controller, Post, Param , Res, Body, UploadedFile, UseInterceptors} from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { Get } from '@nestjs/common';
import { Album } from 'generated/prisma'; 
import { CreateAlbumDto } from '../dto/create-album.dto';
import { AlbumService } from './album.service';
import { Response } from "express";

@Controller('album')
export class AlbumController {
    constructor(private  AlbumService: AlbumService) {}


    @Get('all')
    async getAllAlbums() : Promise<Album[]> {
        return this.AlbumService.getAllAlbums();
    }

    @Post('create-album')
    async createAlbum(@Body() albumData: CreateAlbumDto): Promise<Album> {
        return this.AlbumService.createAlbum(albumData);
    }

    @Post('add-image/:albumId')
    @UseInterceptors(FileInterceptor('file'))
    async addImageToAlbum(
        @Param('albumId') albumId: string,
        @UploadedFile() image: Express.Multer.File
    ) {
        return this.AlbumService.addImageToAlbum(albumId, image);
    }

    @Get('image/:albumId')
    async getAlbumImage(@Param('albumId') albumId: string, @Res() res: Response) {
        return this.AlbumService.getAlbumImage(albumId, res);
    }
}
