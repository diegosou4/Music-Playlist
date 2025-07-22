import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreatePlaylistDto } from '../dto/create-playlist.dto';
import { PlaylistByIdDto , playlistById} from 'src/dto/playlist-byid.dto';

@Injectable()
export class PlaylistService {
    constructor(private prisma: PrismaService) {}

    async getAllPlaylists() {
        const playlists = await this.prisma.playlist.findMany();
        return playlists;
    }

    async getPlaylistById(id: string) : Promise<PlaylistByIdDto> {
       const playlist = await this.prisma.playlist.findUnique({
            where: { id: id },
            ...playlistById
        });

        if (!playlist) {
            throw new Error(`Playlist with id ${id} not found`);
        }
        return playlist;
    }

    async createPlaylist(data: CreatePlaylistDto) {
        const playlist = await this.prisma.playlist.create({
            data: {
                name : data.name,
                description : data.description,
                userId : data.userId,
            },
        });
        return playlist;
    }

    async addTrackToPlaylist(playlistId: string, trackId: string) {
        const playlist = await this.getPlaylistById(playlistId);
        if (!playlist) {
            throw new Error(`Playlist with id ${playlistId} not found`);
        }

        const track = await this.prisma.track.findUnique({
            where: { id: trackId },
        });
        if (!track) {
            throw new Error(`Track with id ${trackId} not found`);
        }

        await this.prisma.playlistTrack.upsert({
                where: {
                    trackId_playlistId: {
                    trackId,
                    playlistId,
                    },
                },
                update: {},
                create: {
                    trackId,
                    playlistId,
                },
            });
        return this.getPlaylistById(playlistId);
    }


    async removeTrackFromPlaylist(playlistId: string, trackId: string) {
        const playlist = await this.getPlaylistById(playlistId);
        if (!playlist) {
            throw new Error(`Playlist with id ${playlistId} not found`);
        }

        await this.prisma.playlistTrack.deleteMany({
            where: {
                trackId: trackId,
                playlistId: playlistId,
            },
        });
        return this.getPlaylistById(playlistId);
    }

    
}
