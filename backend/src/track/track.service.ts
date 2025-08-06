import { BadRequestException, Injectable } from "@nestjs/common";
import { Track } from "generated/prisma";
import { GenreService } from "src/genre/genre.service";
import { TrackDto } from "../dto/track.dto"; 
import { ArtistService} from "src/artist/artist.service";
import { MediaService } from "src/media/media.service"; 
import { parseBuffer } from "music-metadata"; 
import { TrackdbService } from "./trackdb.service";
import { IAudioMetadata } from "music-metadata/lib/type";

@Injectable()
export class TrackService {
    constructor(
        private trackdbService: TrackdbService,
        private genreService: GenreService,
        private artistService: ArtistService,
        private mediaService: MediaService
    ) {}

    async createTrack(trackData: TrackDto, file: Express.Multer.File): Promise<Track> {
        await this.genreService.getGenreById(trackData.genreId).catch(() => {
                throw new BadRequestException(`Genre with id ${trackData.genreId} not found`);});
       await this.artistService.getArtistById(trackData.artistId)
            .catch(() => {throw new BadRequestException(`Artist with id ${trackData.artistId} not found`);});
      
    
        const metadata : IAudioMetadata = await parseBuffer(file.buffer, file.mimetype);
        const track = await this.trackdbService.createTrack(trackData, metadata, file.mimetype);
        await this.uploadTrackCloud(file, track.id)

        return track;
    }

    async uploadTrackCloud(file: Express.Multer.File, idtrack : string): Promise<string> {
        const filePath = await this.mediaService.uploadMedia(file, idtrack);
    
        return filePath;
    }

   async getAllTracks(): Promise<Track[]> {
        const tracks = await this.trackdbService.getAllTracks();
        if (!tracks || tracks.length === 0) {
            throw new BadRequestException('No tracks found');
        }
        return tracks;
    }

    async getTrackById( id: string): Promise<Track> {
        const track = await this.trackdbService.getTrackById(id);
        if (!track) {
            throw new BadRequestException(`Track with id ${id} not found`);
        }
        return track;
    }

    async deleteTrack(id: string): Promise<void> {
        const track = await this.trackdbService.getTrackById(id);
        try{
            await this.trackdbService.deleteTrack(id);
        } catch (error) {
            throw new BadRequestException(`Track with id ${id} not found`);
        }
        await this.mediaService.deleteMedia(track.url);
    }
  
    async getRecentTracks(): Promise<Track[]> {
        const tracks = await this.trackdbService.getRecentTracks();
        if (!tracks || tracks.length === 0) {
            throw new BadRequestException('No recent tracks found');
        }
        return tracks;
    }

    
}