import { z } from "zod";

export const CreateItemSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title too long"),
});

export const UpdateItemSchema = z.object({
  title: z.string().min(1).max(255).optional(),
  done: z.boolean().optional(),
});

export type CreateItemInput = z.infer<typeof CreateItemSchema>;
export type UpdateItemInput = z.infer<typeof UpdateItemSchema>;
