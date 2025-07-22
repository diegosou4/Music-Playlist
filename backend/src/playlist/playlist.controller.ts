import { Controller, Get,Param, Post, Body, Delete} from "@nestjs/common";
import { Playlist } from 'generated/prisma';
import { PlaylistService } from "./playlist.service";
import { CreatePlaylistDto } from "../dto/create-playlist.dto";
import { PlaylistByIdDto } from 'src/dto/playlist-byid.dto';

@Controller('playlist')
export class PlaylistController
{
    constructor(private PlaylistService: PlaylistService) {}

    @Get('all')
    async getAllPlaylists():  Promise<Playlist[]> {
        return await this.PlaylistService.getAllPlaylists();
    }

    @Get(':id')
    async getPlaylistById(@Param('id') id: string): Promise<PlaylistByIdDto> {
        return await this.PlaylistService.getPlaylistById(id);
    }

    @Post('create-playlist')
    async createPlaylist(@Body() playlistData: CreatePlaylistDto): Promise<Playlist> {
       return await this.PlaylistService.createPlaylist(playlistData);
    }

    @Post(':playlistId/add-track/:trackId')
    async addTrackToPlaylist(@Param('playlistId') playlistId: string,@Param('trackId') trackId: string): Promise<Playlist> {
        return await this.PlaylistService.addTrackToPlaylist(playlistId, trackId);
    }

    @Delete(':playlistId/remove-track/:trackId')
    async removeTrackFromPlaylist(@Param('playlistId') playlistId: string, @Param('trackId') trackId: string): Promise<Playlist> {
        return await this.PlaylistService.removeTrackFromPlaylist(playlistId, trackId);
    }
}