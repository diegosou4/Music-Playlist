/*
  Warnings:

  - Added the required column `album` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `artist` to the `Track` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genre` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Playlist" ADD COLUMN     "popularity" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Track" ADD COLUMN     "album" TEXT NOT NULL,
ADD COLUMN     "artist" TEXT NOT NULL,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "lyrics" TEXT,
ADD COLUMN     "popularity" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "isPublic" SET DEFAULT true;
