/*
  Warnings:

  - You are about to drop the column `breakTime` on the `StudySession` table. All the data in the column will be lost.
  - You are about to drop the column `notifyBeforeTime` on the `StudySession` table. All the data in the column will be lost.
  - You are about to drop the column `scheduledSessionTime` on the `StudySession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StudySession" DROP COLUMN "breakTime",
DROP COLUMN "notifyBeforeTime",
DROP COLUMN "scheduledSessionTime",
ADD COLUMN     "breakDuration" INTEGER,
ADD COLUMN     "notifyBeforeDuration" INTEGER,
ADD COLUMN     "scheduledSessionDuration" INTEGER;
