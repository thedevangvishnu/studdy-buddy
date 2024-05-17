import { authHandler } from "@/auth";
import { createStudySession, saveStudySession } from "@/data/study-session";
import { SaveSessionSchema } from "@/schema/study-session-schema";
import { NextRequest, NextResponse } from "next/server";

// create a new study session
export async function POST(req: NextRequest) {
  const session = await authHandler.auth();
  const userId = session?.user.userId!;

  const body = await req.json();

  // Zod .date() expects native Date object.The date in the payload is in ISO string format. Convert to the native Date object for successful validation
  const updatedBody = {
    ...body,
    startTime: new Date(body.startTime),
    endTime: new Date(body.endTime),
  };

  const validatedFields = SaveSessionSchema.safeParse(updatedBody);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid inputs!" }, { status: 400 });
  }

  const { startTime, endTime, breakDuration } = body;

  const studySessionInfo = {
    userId,
    startTime,
    endTime,
    breakDuration,
  };
  const created = await saveStudySession(studySessionInfo);

  if (!created) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Session saved!", id: created.id },
    { status: 201 }
  );
}
