import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Track } from "generated/prisma";
// import { TrackDto } from "src/dto/track.dto";

@Injectable()
export class TrackService {
    constructor(private prisma: PrismaService) {}


    // async createTrack(trackData: TrackDto): Promise<Track> {
    //     if (!this.prisma.track) {
    //         throw new Error('Track model is not defined on PrismaService');
    //     }
    //     // const newTrack = await this.prisma.track.create({
    //     //     data: trackData,
    //     // });
    //     return newTrack;
    // }

   async getAllTracks(): Promise<Track[]> {
        if (!this.prisma.track) {
            throw new Error('Track model is not defined on PrismaService');
        }
        const tracks = await this.prisma.track.findMany();
        return tracks;
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

}