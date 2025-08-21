import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { PrismaModule } from 'src/database/prisma.module';
import { GenreModule } from 'src/genre/genre.module';
import { ArtistModule } from 'src/artist/artist.module';
import { MediaModule } from 'src/media/media.module';
import { TrackdbService } from './trackdb.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule,PrismaModule, GenreModule, ArtistModule, MediaModule],
  controllers: [TrackController],
  providers: [TrackService, TrackdbService],
  exports: [TrackService, TrackdbService],
})
export class TrackModule {}
