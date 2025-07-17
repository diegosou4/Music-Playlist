import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { ArtistService } from './artist.service';

@Module({
  imports: [PrismaModule],
  controllers: [ArtistController],
  providers: [ArtistService],
  exports: [ArtistService]
})
export class ArtistModule {}
