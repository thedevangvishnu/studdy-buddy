/*
  Warnings:

  - You are about to drop the `StudySession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudySession" DROP CONSTRAINT "StudySession_userId_fkey";

-- DropTable
DROP TABLE "StudySession";

-- CreateTable
CREATE TABLE "study_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3),
    "breakDuration" INTEGER,
    "scheduledForLater" BOOLEAN DEFAULT false,
    "scheduledSessionDuration" INTEGER,
    "notifyBefore" BOOLEAN DEFAULT false,
    "notifyBeforeDuration" INTEGER,

    CONSTRAINT "study_sessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "study_sessions" ADD CONSTRAINT "study_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
