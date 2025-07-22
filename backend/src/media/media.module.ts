import { Module } from "@nestjs/common";
import { StorageModule } from "src/storage/storage.module";
import { MediaController } from "./media.controller";
import { MediaService } from "./media.service";
import { TrackdbService } from "src/track/trackdb.service";
import { PrismaModule } from "src/database/prisma.module";
  
@Module({
  imports: [PrismaModule, StorageModule],
  controllers: [MediaController],
  providers: [MediaService, TrackdbService],
  exports: [MediaService],

})
export class MediaModule {}