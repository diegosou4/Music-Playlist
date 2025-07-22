import { Controller, Post , Body} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Album } from 'generated/prisma'; 
import { CreateAlbumDto } from '../dto/create-album.dto';
import { AlbumService } from './album.service';

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



}
