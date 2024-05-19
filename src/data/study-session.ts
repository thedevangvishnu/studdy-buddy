// All study-session related database logic
// All of these data requests should be using try/catch block

// create types for the input to these requests

import { db } from "@/lib/db";

export const saveStudySession = async (info) => {
  try {
    const { userId, startTime, endTime, breakDuration } = info;
    const created = await db.studySession.create({
      data: {
        userId,
        startTime,
        endTime,
        breakDuration,
      },
    });
    return created;
  } catch (error) {
    return null;
  }
};

export const getStudySessionsByDate = async (date: Date, userId: string) => {
  try {
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);

    const endDate = new Date(date);
    endDate.setUTCHours(23, 59, 59, 999);

    return await db.studySession.findMany({
      where: {
        userId,
        createdAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });
  } catch (error) {
    return null;
  }
};
