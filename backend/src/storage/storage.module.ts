import { Module } from "@nestjs/common";
import { StorageService } from "./storage.service";
import { ConfigModule} from "@nestjs/config";
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
  providers: [StorageService],
  exports: [StorageService],
})
export class StorageModule {}