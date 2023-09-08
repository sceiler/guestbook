/*
  Warnings:

  - Made the column `content` on table `Entry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Entry" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "language" DROP NOT NULL;
