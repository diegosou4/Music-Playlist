import { Module } from '@nestjs/common';
import { AlbumController } from './album.controller';
import { AlbumService } from './album.service';
import { PrismaModule } from 'src/database/prisma.module';
import { GenreModule } from 'src/genre/genre.module';
import { ArtistModule } from 'src/artist/artist.module';



@Module({
  imports: [PrismaModule, GenreModule, ArtistModule],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
