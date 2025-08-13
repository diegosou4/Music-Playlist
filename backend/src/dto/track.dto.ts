
import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class TrackDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;


    @ApiProperty()
    @IsNotEmpty()
    artistId: string;

    @ApiProperty()
    @IsNotEmpty()
    albumId: string;

    albumName?: string;

    @ApiProperty()
    @IsNotEmpty()
    duration: number;

    @ApiProperty()
    @IsString()
    lyrics?: string;
    @ApiProperty()   
    isPublic: boolean;

    @ApiProperty()
    @IsNotEmpty()
    genreId: string;


}