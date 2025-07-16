import { IsString} from 'class-validator';

export class CreateAlbumDto {

    @IsString()
    name : string;

    @IsString()
    artistId: string;

    @IsString()
    genreId: string;

    @IsString()
    isPlublic?: boolean;

}