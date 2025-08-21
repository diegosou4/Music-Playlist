/*
  Warnings:

  - You are about to drop the column `userId` on the `UserAuth` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `UserAuth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAuth" DROP CONSTRAINT "UserAuth_userId_fkey";

-- DropIndex
DROP INDEX "UserAuth_userId_key";

-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_username_key" ON "UserAuth"("username");

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_username_fkey" FOREIGN KEY ("username") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
