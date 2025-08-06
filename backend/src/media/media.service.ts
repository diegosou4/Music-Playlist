import { Injectable } from "@nestjs/common";
import { Response } from "express";
import { StorageService } from "src/storage/storage.service";
import {NotFoundException, ServiceUnavailableException} from "@nestjs/common";
import { StorageFile } from "src/storage/storage-file";
import { TrackdbService } from "src/track/trackdb.service";

@Injectable()
export class MediaService {
  constructor(private storageService: StorageService,
            private trackdbService: TrackdbService
  ) {}

  async uploadMedia(file: Express.Multer.File, mediaId: string): Promise<any> {
    const result = await this.storageService.save(
      "media/" + mediaId,
      file.buffer,
      [{ mediaId: mediaId }]
    );

    return result;
  }


  async downloadMedia( mediaId: string, res: Response) {
    
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get(`media/${mediaId}`);
    } catch (e) {
      if (e.message.toString().includes("No such object")) {
        throw new NotFoundException("image not found");
      } else {
        throw new ServiceUnavailableException("internal error");
      }
    }

    const mimeType = await this.trackdbService.getMimeTypeById(mediaId);
    res.setHeader("Content-Type", mimeType || "audio/mpeg");
    res.setHeader("Cache-Control", "max-age=60d");
    res.end(storageFile.buffer);
  }

  async deleteMedia(pathUrl: string): Promise<void> {
    try {
      await this.storageService.delete(pathUrl);
    } catch (e) {
      if (e.message.toString().includes("No such object")) {
        throw new NotFoundException("image not found");
      } else {
        throw new ServiceUnavailableException("internal error");
      }
    }
  }

  async addImageToMedia(mediaId: string, image: Express.Multer.File) {
    if (!this.storageService) {
      throw new Error("StorageService is not initialized");
    }
    const imagePath = await this.storageService.save(
      "images/" + mediaId,
      image.buffer,
      [{ mediaId: mediaId }]
    );
    return imagePath;

  }

  async downloadImage(path: string, res: Response) {
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get(`${path}`);
    } catch (e) {
      if (e.message.toString().includes("No such object")) {
        throw new NotFoundException("image not found");
      } else {
        throw new ServiceUnavailableException("internal error");
      }
    }
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Cache-Control", "max-age=60d");
    res.end(storageFile.buffer);
  }

  async getMediaImage(mediaId: string, res: Response) {
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get(`images/${mediaId}`);
    } catch (e) {
      if (e.message.toString().includes("No such object")) {
        throw new NotFoundException("image not found");
      } else {
        throw new ServiceUnavailableException("internal error");
      }
    }
    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Cache-Control", "max-age=60d");
    res.end(storageFile.buffer);
  }
}
