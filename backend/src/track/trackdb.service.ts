import { Injectable } from "@nestjs/common";
import { Track } from "generated/prisma/wasm";
import { PrismaService } from "src/database/prisma.service";
import { TrackDto } from "src/dto/track.dto";
import { IAudioMetadata } from "music-metadata/lib/type";
import { trackinfoDTO } from "src/dto/trackInfo.dto";

@Injectable()
export class TrackdbService {
   constructor(private prisma: PrismaService){}

   async createTrack(trackData: TrackDto, metadata: IAudioMetadata, mimeType : string): Promise<Track> {
        const newTrack = await this.prisma.track.create({
            data: {
                name : trackData.name,
                duration: metadata.format.duration ? metadata.format.duration : 0,
                url : "",
                mimeType: mimeType,
                genreId: trackData.genreId,
                artistId: trackData.artistId, 
                albumId: trackData.albumId,
            },
        });
        this.updateTrackUrl(newTrack.id, `media/${newTrack.id}`);
        return newTrack;
   }
   
     async getTrackById( id: string): Promise<Track> {
        const track = await this.prisma.track.findUnique({
            where: { id: id },
        });
        if (!track) {
            throw new Error(`Track with id ${id} not found`);
        }
        return track;
    }

    async getAllTracks(): Promise<Track[]> {
        const tracks = await this.prisma.track.findMany(
            {
                ...trackinfoDTO
            }
        );
        return tracks;
    }

    async getMimeTypeById(id: string): Promise<string | null> {
        const track = await this.prisma.track.findUnique({
            where: { id: id },
            select: { mimeType: true },
        });
        return track?.mimeType || null;
    }

    async updateTrackUrl(id: string, url: string): Promise<Track> {
        const updatedTrack = await this.prisma.track.update({
            where: { id: id },
            data: { url: url },
        });
        return updatedTrack;
    }

    async deleteTrack(id: string): Promise<Track> {
        const deletedTrack = await this.prisma.track.delete({
            where: { id: id },
        });
        if (!deletedTrack) {
            throw new Error(`Track with id ${id} not found`);
        }
        return deletedTrack;
    }

    async getRecentTracks(): Promise<Track[]> {
        const tracks = await this.prisma.track.findMany({
            ...trackinfoDTO,
            orderBy: {
                createdAt: 'desc',
            },
            take: 10,
        });
        return tracks;
    }
}

      
