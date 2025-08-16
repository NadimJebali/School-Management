"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { SubjectsSchema, subjectsSchema } from "@/app/lib/formValidationSchemas";
import { createSubject } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Span } from "next/dist/trace";
import { useEffect } from "react";
import { toast } from "react-toastify";



const SubjectForm = ({type, data}:{type:"create" | "update"; data?:any}) => {

     const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectsSchema>({
    resolver: zodResolver(subjectsSchema),
  });

  const [state, formAction] = useFormState(createSubject, {success:false,error:false});

  const onSubmit= handleSubmit(data=>{
    console.log(data);
    formAction(data);
  });

 useEffect(() => {
  if (state.success) {
    toast.success(`Subject has been ${type === "create" ? "created" : "updated"}!`);
  }
  if (state.error) {
    toast.error("Something went wrong!");
  }
}, [state.success, state.error, type]);


  return (
    <form className='flex flex-col gap-8' onSubmit={onSubmit}>
        <h1 className="text-xl font-semibold text-gray-800">{type === "create" ? "Create a new subject" : "Update the subject"}</h1>
        <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Subject name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
      </div>
      {state.error && <span className="text-red-500">Something went wrong!</span>}
        <button className="bg-blue-400 text-white p-2 rounded-md ">{type === "create" ? "create" : "update"}</button>
    </form>
  )
}

export default SubjectForm