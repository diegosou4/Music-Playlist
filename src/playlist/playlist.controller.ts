import { Controller, Get,Param, Post, Body} from "@nestjs/common";
import { Playlist } from 'generated/prisma';
import { PlaylistService } from "./playlist.service";
import { CreatePlaylistDto } from "../dto/create-playlist.dto";


@Controller('playlist')
export class PlaylistController
{
    constructor(private PlaylistService: PlaylistService) {}


    @Get('all')
    async getAllPlaylists():  Promise<Playlist[]> {
        return await this.PlaylistService.getAllPlaylists();
    }


    @Get(':id')
    async getPlaylistById(@Param('id') id: string): Promise<Playlist> {
        return await this.PlaylistService.getPlaylistById(id);
    }


    @Post('create-playlist')
    async createPlaylist(@Body() playlistData: CreatePlaylistDto): Promise<Playlist> {
       return await this.PlaylistService.createPlaylist(playlistData);
    }

    


}