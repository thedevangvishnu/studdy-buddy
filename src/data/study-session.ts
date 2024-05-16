// All study-session related database logic
// All of these data requests should be using try/catch block

import { db } from "@/lib/db";

export const createStudySession = async (id: string, startTime: Date) => {
  try {
    const created = await db.studySession.create({
      data: {
        userId: id,
        startTime,
      },
    });
    return created;
  } catch (error) {
    return null;
  }
};
