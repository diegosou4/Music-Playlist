import { StorageFile } from "./storage-file";
import { DownloadResponse, Storage } from "@google-cloud/storage";
import { Injectable } from "@nestjs/common";
import { StorageConfig } from "./storage-config";

@Injectable()
export class StorageService {
  private storage: Storage;
  private bucket: string;

  constructor() {
    this.storage = new Storage({
      projectId: StorageConfig.projectId,
      credentials: {
        private_key: StorageConfig.private_key,
        client_email: StorageConfig.client_email,
      },
    });
    this.bucket = StorageConfig.bucket_name as string;
  }

  async save(
    path: string,
    media: Buffer,
    metadata: { [key: string]: string }[]
  ) {
    const object = metadata.reduce((obj, item) => Object.assign(obj, item), {});
    const file = this.storage.bucket(this.bucket).file(path);
    const stream = file.createWriteStream();

    stream.on("finish", async () => {
      return await file.setMetadata({
        metadata: object,
      });
      
    });
    
    stream.end(media);
  }

  async delete(path: string) {
    await this.storage
      .bucket(this.bucket)
      .file(path)
      .delete({ ignoreNotFound: true });
  }

  async get(path: string): Promise<StorageFile> {
    const fileResponse: DownloadResponse = await this.storage
      .bucket(this.bucket)
      .file(path)
      .download();
    const [buffer] = fileResponse;
    const storageFile = new StorageFile();
    storageFile.buffer = buffer;
    storageFile.metadata = new Map<string, string>();
    return storageFile;
  }

  

  async getWithMetaData(path: string): Promise<StorageFile> {
    const [metadata] = await this.storage
      .bucket(this.bucket)
      .file(path)
      .getMetadata();
    const fileResponse: DownloadResponse = await this.storage
      .bucket(this.bucket)
      .file(path)
      .download();
    const [buffer] = fileResponse;

    const storageFile = new StorageFile();
    storageFile.buffer = buffer;
    storageFile.metadata = new Map<string, string>(
      Object.entries(metadata || {}).filter(
        ([, value]) => typeof value === "string"
      ) as [string, string][]
    );
    storageFile.contentType = storageFile.metadata.get("contentType") ?? "";
    return storageFile;
  }
  
}