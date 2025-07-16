import { Controller, Get, Post , Body, Param} from '@nestjs/common';
import { PrismaService } from './../database/primas.service';
import { Genre } from 'generated/prisma'; 

@Controller('genre')
export class GenreController {
    constructor(private readonly prismaService: PrismaService) {}


    @Get('all')
    async getAllGenres() : Promise<Genre[]> {
        if (!this.prismaService) {
            throw new Error('PrismaService is not initialized');
        }
        const genres = await this.prismaService.genre.findMany();
        return genres;
    }

    @Get(':id')
    async getGenreById(@Param('id') id: string): Promise<Genre>
    {
        const genre = await this.prismaService.genre.findUnique({
            where: { id: id },
        });
        if (!genre) {
            throw new Error(`Genre with id ${id} not found`);
        }
        return genre;
    }

    @Post('create-genre')
    async createGenre(@Body() genreData: { name: string }): Promise<Genre> {
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
