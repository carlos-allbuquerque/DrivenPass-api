/*
  Warnings:

  - You are about to drop the column `content` on the `safeNotes` table. All the data in the column will be lost.
  - Added the required column `note` to the `safeNotes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "safeNotes" DROP COLUMN "content",
ADD COLUMN     "note" TEXT NOT NULL;
