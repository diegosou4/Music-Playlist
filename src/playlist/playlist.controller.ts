import { Controller, Get ,Post, Body,Param} from "@nestjs/common";
import { PrismaService } from './../database/primas.service';
import { Playlist } from 'generated/prisma';
import { PlaylistDto } from 'src/dto/playlist.dto';


@Controller('playlist')
export class PlaylistController
{
    constructor(private prisma: PrismaService) {}


    @Get('all')
    async getAllPlaylists():  Promise<Playlist[]> {
        if (!this.prisma.playlist) {
            throw new Error('Playlist model is not defined on PrismaService');
        }
        const playlists = await this.prisma.playlist.findMany();
        return playlists;
    }


    @Get(':id')
    async getPlaylistById(@Param('id') id: string): Promise<Playlist> {
        const playlist = await this.prisma.playlist.findUnique({
            where: { id: id},
        });
        if (!playlist) {
            throw new Error(`Playlist with id ${id} not found`);
        }
        return playlist;
    }


    @Post('create-playlist')
    async createPlaylist(@Body() playlistData: PlaylistDto): Promise<Playlist> {
        const playlist = await this.prisma.playlist.create({
            data: {
                name: playlistData.name,
                description: playlistData.description,
                image: playlistData.image,
                userId: playlistData.userId,
                isPublic: playlistData.isPublic ?? false
            },
        })
        return playlist;
    }

    


}