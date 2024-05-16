import { authHandler } from "@/auth";
import { createStudySession } from "@/data/study-session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await authHandler.auth();

  // create a nwe studySession {} that will have data that a new study session should have based on the scehma. Call createStudySession from data folder and make the db query.

  // return studySession id and a success message

  //    each new studySession will have the following details:
  /**
   * userId
   * startTime
   *
   *
   */

  const userId = session?.user.userId!;
  const startTime = new Date();

  const response = await createStudySession(userId, startTime);

  if (!response) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Study session started" },
    { status: 201 }
  );
}
