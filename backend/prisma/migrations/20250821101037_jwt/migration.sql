/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserAuth` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `UserAuth` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserAuth" DROP CONSTRAINT "UserAuth_username_fkey";

-- AlterTable
ALTER TABLE "UserAuth" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserAuth_userId_key" ON "UserAuth"("userId");

-- AddForeignKey
ALTER TABLE "UserAuth" ADD CONSTRAINT "UserAuth_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
