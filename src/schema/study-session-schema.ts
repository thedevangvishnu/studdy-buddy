import z from "zod";

export const SaveSessionSchema = z.object({
  startTime: z.date(),
  endTime: z.date(),
  breakDuration: z.number(),
});

export type SaveSessionType = z.infer<typeof SaveSessionSchema>;
