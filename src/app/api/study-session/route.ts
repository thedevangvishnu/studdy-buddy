import { authHandler } from "@/auth";
import { saveStudySession, getStudySessionsByDate } from "@/data/study-session";
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

  // to do --> calculate the total study session time in milliseconds and save to schema. (Might have to change the schema first)

  // add a validation that each session must be atleast 10mins and breaktime >= endTime - sessionTime
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

export async function GET(req: NextRequest) {
  // send all the study session of this user for the date,sent in the request query params

  const session = await authHandler.auth();
  const userId = session?.user.userId;

  const { searchParams } = req.nextUrl;
  const query = searchParams.get("date");

  if (!query) {
    return NextResponse.json({ error: "Missing date!" }, { status: 400 });
  }

  const date = new Date(query);

  // using this date, make the query to db and extract all the study-session for this date for this user.

  const studySessions = await getStudySessionsByDate(date, userId!);

  if (!studySessions) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Found!", studySessions },
    { status: 200 }
  );
}
