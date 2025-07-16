import { Controller, Get ,Post, Body} from "@nestjs/common";
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