import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/primas.service';
import { UserAuthModule } from './UserAuth/UserAuth.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [UserAuthModule, PlaylistModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
