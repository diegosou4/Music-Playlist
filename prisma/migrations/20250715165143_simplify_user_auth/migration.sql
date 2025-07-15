/*
  Warnings:

  - You are about to drop the column `provider` on the `UserAuth` table. All the data in the column will be lost.
  - You are about to drop the column `providerAccountId` on the `UserAuth` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserAuth" DROP COLUMN "provider",
DROP COLUMN "providerAccountId";
