
import { IsNotEmpty, IsString } from "class-validator";


export class TrackDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    artist: string;

    albumId?: string;

    albumName?: string;

    @IsNotEmpty()
    duration: number;
   
    @IsString()
    lyrics?: string;

    isPublic: boolean;


}