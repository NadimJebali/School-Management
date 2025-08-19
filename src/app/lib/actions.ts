"use server"

import prisma from "./prisma";
import { SubjectsSchema } from "./formValidationSchemas";

type currentState = {success:boolean, error:boolean}

export const createSubject = async (
  currentState: currentState,
  data: SubjectsSchema
) => {
  try {
    await prisma.subject.create({
      data: {
        name: data.name,
        teachers: {
          connect: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const updateSubject = async (
  currentState: currentState,
  data: SubjectsSchema
) => {
  try {
    await prisma.subject.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        teachers: {
          set: data.teachers.map((teacherId) => ({ id: teacherId })),
        },
      },
    });

    // revalidatePath("/list/subjects");
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};

export const deleteSubject = async (currentState:currentState, data: FormData) => {

  const id = data.get("id") as string

  try {
    await prisma.subject.delete({
      where:{
        id:parseInt(id)
      },
    });
    // revalidatePath("/list/subjects");
    return { success: true, error:false };
  } catch (error: any) {
    console.error("Delete subject error:", error);
    return { success: false, error:true };
  }
};
