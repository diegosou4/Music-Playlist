
import { IsNotEmpty, IsString } from "class-validator";


export class TrackDto {

    @IsNotEmpty()
    name: string;


    @IsNotEmpty()
    artistId: string;

    @IsNotEmpty()
    albumId: string;

    albumName?: string;

    @IsNotEmpty()
    duration: number;
   
    @IsString()
    lyrics?: string;

    isPublic: boolean;

    @IsNotEmpty()
    genreId: string;


}