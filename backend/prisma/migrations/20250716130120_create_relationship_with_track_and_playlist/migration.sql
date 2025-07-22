/*
  Warnings:

  - You are about to drop the column `genre` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `Track` table. All the data in the column will be lost.
  - You are about to drop the column `playlistId` on the `Track` table. All the data in the column will be lost.
  - Added the required column `genreId` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genreId` to the `Track` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Track" DROP CONSTRAINT "Track_playlistId_fkey";

-- AlterTable
ALTER TABLE "Album" DROP COLUMN "genre",
ADD COLUMN     "genreId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Track" DROP COLUMN "genre",
DROP COLUMN "playlistId",
ADD COLUMN     "genreId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PlaylistTrack" (
    "trackId" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,

    CONSTRAINT "PlaylistTrack_pkey" PRIMARY KEY ("trackId","playlistId")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistTrack" ADD CONSTRAINT "PlaylistTrack_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "Track"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistTrack" ADD CONSTRAINT "PlaylistTrack_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
