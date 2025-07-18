
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Genre } from "generated/prisma";
import { CreateGenreDto } from "src/dto/create-genre.dto";

@Injectable()
export class GenreService { 
    constructor(private prismaService: PrismaService) {}


    async getAllGenres(): Promise<Genre[]> {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        const genres = await this.prismaService.genre.findMany();
        return genres;
    }

    async getGenreById(id: string): Promise<Genre> {
        const genre = await this.prismaService.genre.findUnique({
            where: { id: id },
        });
        if (!genre) {
            throw new Error(`Genre with id ${id} not found`);
        }
        return genre;
    }

    async createGenre(genreData: CreateGenreDto): Promise<Genre> {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        const genre = await this.prismaService.genre.create({
            data: {
                name: genreData.name,
            },
        });
        return genre;
    }


}