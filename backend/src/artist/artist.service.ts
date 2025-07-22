import { Injectable} from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { CreateArtistDto } from "src/dto/create-artist.dto";
import { GenreService } from "src/genre/genre.service";

@Injectable()
export class ArtistService { 
    constructor(
        private readonly prismaService: PrismaService,
        private readonly GenreService: GenreService
    ) {}

    async getAllArtists() {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        return this.prismaService.artist.findMany();
    }

    async createArtist(artistData: CreateArtistDto) {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }

        if(!artistData.genreId) {
          throw new Error('Genre ID is required');
        }

        try{
            this.GenreService.getGenreById(artistData.genreId);
        }catch (error) {
                throw new Error(`Genre with id ${artistData.genreId} not found`);
        }

        return this.prismaService.artist.create({
            data: {
                name: artistData.name,
                biography: artistData.biography,
                genreId: artistData.genreId,
            },
        });
    }
    async getArtistById(id: string)
    {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        const artist = await this.prismaService.artist.findUnique({
            where: { id: id },
        });
        if (!artist) {
            throw new Error(`Artist with id ${id} not found`);
        }
        return artist;
    }



}
