import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Track } from "generated/prisma";
import { GenreService } from "src/genre/genre.service";
import { TrackDto } from "../dto/track.dto"; // Assuming you have a DTO for track data
import { ArtistService} from "src/artist/artist.service";

@Injectable()
export class TrackService {
    constructor(
        private prisma: PrismaService,
        private genreService: GenreService,
        private artistService: ArtistService
    ) {}


    async createTrack(trackData: TrackDto): Promise<Track> {
        if (!this.prisma.track) {
            throw new Error('Track model is not defined on PrismaService');
        }
        await this.genreService.getGenreById(trackData.genreId)
            .catch(() => {
                throw new BadRequestException(`Genre with id ${trackData.genreId} not found`);
            });
        await this.artistService.getArtistById(trackData.artistId)
            .catch(() => {
                throw new BadRequestException(`Artist with id ${trackData.artistId} not found`);
            });


        const newTrack = await this.prisma.track.create({
            data: {
                name : trackData.name,
                duration: trackData.duration,
                url : "Preciso gerar",
                genreId: trackData.genreId,
                artistId: trackData.artistId, 
                albumId: trackData.albumId,
            },
        });
        return newTrack;
    }

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