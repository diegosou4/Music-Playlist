
import { IsNotEmpty, IsString } from "class-validator";


export class TrackDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    name: string;


    @IsNotEmpty()
    artistid: string;

    albumId?: string;

    albumName?: string;

    @IsNotEmpty()
    duration: number;
   
    @IsString()
    lyrics?: string;

    isPublic: boolean;

    @IsNotEmpty()
    genreId: string;


}