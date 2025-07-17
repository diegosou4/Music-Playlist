import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';
import { PrismaModule } from 'src/database/prisma.module';
import { GenreModule } from 'src/genre/genre.module';
import { ArtistModule } from 'src/artist/artist.module';

@Module({
  imports: [PrismaModule, GenreModule, ArtistModule],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
