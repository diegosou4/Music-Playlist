import { ApiProperty } from '@nestjs/swagger';
import { IsString} from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty()
    @IsString()
    name : string;

  @ApiProperty()
  @IsString()
  artistId: string;

  @ApiProperty()
  @IsString()
  genreId: string;

  @ApiProperty()
  @IsString()
  isPublic?: boolean;

}