import { SaveSessionType } from "@/schema/study-session-schema";

export const saveSession = async (session: SaveSessionType) => {
  const response = await fetch("/api/study-session", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(session),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.error);
  }

  return responseBody.message;
};
