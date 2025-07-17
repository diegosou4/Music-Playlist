import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { PrismaModule } from 'src/database/prisma.module';
import { GenreService } from './genre.service';


@Module({
  imports: [PrismaModule],
  controllers: [GenreController],
  providers: [GenreService],
  exports: [GenreService]
})
export class GenreModule {}
