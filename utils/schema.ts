import * as z from "zod";

export const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});

export type TodoDataType = z.infer<typeof TodoSchema>;
