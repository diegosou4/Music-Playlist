import { Injectable} from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";


@Injectable()
export class ArtistService { 
    constructor(private readonly prismaService: PrismaService) {}

    async getAllArtists() {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        return this.prismaService.artist.findMany();
    }

    async createArtist(artistData: { name: string }) {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        return this.prismaService.artist.create({
            data: {
                name: artistData.name,
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
