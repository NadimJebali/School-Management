import z from "zod";

export const subjectsSchema = z.object({
  name: z.string().min(1, { message: 'Subject name is required!' }),
  
});

export type SubjectsSchema = z.infer<typeof subjectsSchema>