import { IsString } from "class-validator";



export class AddTrackAlbumDto {

    @IsString()
    albumId: string;

    @IsString()
    trackId: string;

}


