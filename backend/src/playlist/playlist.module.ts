import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { PlaylistService } from './playlist.service';

@Module({
    imports: [PrismaModule],
    controllers: [PlaylistController],
    providers: [PlaylistService],


})
export class PlaylistModule {}
