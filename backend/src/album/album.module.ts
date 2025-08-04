import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { PrismaModule } from 'src/database/prisma.module';
import { GenreModule } from 'src/genre/genre.module';
import { ArtistModule } from 'src/artist/artist.module';
import { MediaModule } from 'src/media/media.module';


@Module({
  imports: [PrismaModule, GenreModule, ArtistModule, MediaModule],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
