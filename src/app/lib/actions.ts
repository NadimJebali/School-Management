"use server"

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { SubjectsSchema } from "./formValidationSchemas";

type currentState = {success:boolean, error:boolean}

export const createSubject = async (currentState:currentState, data: SubjectsSchema) => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
      },
    });
    // revalidatePath("/list/subjects");
    return { success: true, error:false };
  } catch (error: any) {
    console.error("Create subject error:", error);
    return { success: false, error:true };
  }
};
