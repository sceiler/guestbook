/*
  Warnings:

  - You are about to drop the column `image` on the `Entry` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Entry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "image",
DROP COLUMN "url";
