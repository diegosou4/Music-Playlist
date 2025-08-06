import {Body, Controller,Get,Param,Post,Res,UploadedFile,UseInterceptors} 
from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { MediaService } from "./media.service";


@Controller("media")
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Post('music')
  @UseInterceptors(FileInterceptor('file'))
  async uploadMedia(
    @UploadedFile() file: Express.Multer.File,
    @Body("mediaId") mediaId: string
  ): Promise<any> {
  

    return await this.mediaService.uploadMedia(file, mediaId);
  }


  @Get("/:mediaId")
  async downloadMedia(@Param("mediaId") mediaId: string, @Res() res: Response) { 
    return await this.mediaService.downloadMedia(mediaId, res);
  }


    @Get("images/:mediaId")
    async getMediaImage(@Param("mediaId") mediaId: string, @Res() res: Response) {
      return await this.mediaService.getMediaImage(mediaId, res);
    }
  }