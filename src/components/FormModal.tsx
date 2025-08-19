"use client";
import { deleteSubject } from "@/app/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, JSX, SetStateAction, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { FormContainerProps } from "./FormContainer";

const deleteActionMap = {
  subject:deleteSubject,
  class:deleteSubject,
  teacher:deleteSubject,
  student:deleteSubject,
  parent:deleteSubject,
  lesson:deleteSubject,
  exam:deleteSubject,
  assignement:deleteSubject,
  result:deleteSubject,
  attendance:deleteSubject,
  event:deleteSubject,
  announcement:deleteSubject,

}

const TeacherForm = dynamic(()=>import("./forms/TeacherForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const StudentForm = dynamic(()=>import("./forms/StudentForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const AnnouncementForm = dynamic(()=>import("./forms/AnnouncementForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const AttendanceForm = dynamic(()=>import("./forms/AttendanceForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const ClassForm = dynamic(()=>import("./forms/ClassForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const EventForm = dynamic(()=>import("./forms/EventForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const ExamForm = dynamic(()=>import("./forms/ExamForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const LessonForm = dynamic(()=>import("./forms/LessonForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const ParentForm = dynamic(()=>import("./forms/ParentForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const ResultForm = dynamic(()=>import("./forms/ResultForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const SubjectForm = dynamic(()=>import("./forms/SubjectForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});
const AssignementForm = dynamic(()=>import("./forms/AssignementForm"), {
  loading: ()=> (
    <div className="flex items-center justify-center h-20">
      <div className="w-6 h-6 border-4 border-[#4B3F99] border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

const forms:{[key:string]:(setOpen:Dispatch<SetStateAction<boolean>>, type:"create" | "update", data?:any, relatedData?:any)=>JSX.Element;
}={
  teacher:(setOpen, type,data, relatedData) => <TeacherForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  student:(setOpen, type,data, relatedData) => <StudentForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  announcement:(setOpen, type,data, relatedData) => <AnnouncementForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  attendance:(setOpen, type,data, relatedData) => <AttendanceForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  class:(setOpen, type,data, relatedData) => <ClassForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  event:(setOpen, type,data, relatedData) => <EventForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  exam:(setOpen, type,data, relatedData) => <ExamForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  lesson:(setOpen, type,data, relatedData) => <LessonForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  parent:(setOpen, type,data, relatedData) => <ParentForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  result:(setOpen, type,data, relatedData) => <ResultForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  assignment:(setOpen, type,data, relatedData) => <AssignementForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  subject:(setOpen, type,data, relatedData) => <SubjectForm type={type} data={data} setOpen={setOpen} relatedData={relatedData}/>,
  
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData,
}: FormContainerProps & {relatedData?: any}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FAE27C]"
      : type === "update"
      ? "bg-[#C3EBFA]"
      : "bg-[#CFCEFF]";

  const [open, setOpen] = useState(false);

  const Form = ()=>{


    const [state,formAction] = useFormState(deleteActionMap[table],{success:false,error:false})

     const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success(`Subject has been deleted! 🎉`);
      setOpen(false);
      router.refresh();
    } else if (state.error) {
      toast.error("Something went wrong ❌");
    }
  }, [state]);


    return type === "delete" && id ? 
    (<form action={formAction} className="p-4 flex flex-col gap-4 ">
      <input type="text | number" name="id" value={id} hidden/>
      <span className="text-center font-medium text-gray-800">All data will be lost. Are you sure you want to delete this {table}?</span>
      <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
    </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen,type,data, relatedData)
    ): "Form not found!";
  }

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full hover:cursor-pointer ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt={`${type} icon`} width={16} height={16} />
      </button>

      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative text-gray-800 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="Close" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
