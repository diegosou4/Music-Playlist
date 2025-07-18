import { Controller, Get, Post , Body, Param} from '@nestjs/common';
import { Genre } from 'generated/prisma';
import { GenreService } from './genre.service'; 
import { CreateGenreDto } from 'src/dto/create-genre.dto';

@Controller('genre')
export class GenreController {
    constructor(private GenreService : GenreService) {}


    @Get('all-genres')
    async getAllGenres() : Promise<Genre[]> {
        return this.GenreService.getAllGenres();
    }

    @Get(':id')
    async getGenreById(@Param('id') id: string): Promise<Genre>
    {
        return this.GenreService.getGenreById(id);
    }

    @Post('create-genre')
    async createGenre(@Body() genreData: CreateGenreDto): Promise<Genre> {
        return this.GenreService.createGenre(genreData);
    }

}
