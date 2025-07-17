import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserAuthModule } from '../UserAuth/UserAuth.module';
import { PlaylistModule } from '../playlist/playlist.module';
import { TrackModule } from '../track/track.module';
import { AlbumModule } from '../album/album.module';
import { GenreModule } from '../genre/genre.module';
import { ArtistModule } from '../artist/artist.module';
import { PrismaModule } from '../database/prisma.module';
import { AppService } from './app.service';


@Module({
  imports: [UserAuthModule, PlaylistModule, TrackModule, AlbumModule, GenreModule, ArtistModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
