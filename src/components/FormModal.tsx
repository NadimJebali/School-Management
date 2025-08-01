"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { JSX, useState } from "react";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

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

const forms:{[key:string]:(type:"create" | "update", data?:any)=>JSX.Element;
}={
  teacher:(type,data) => <TeacherForm type={type} data={data} />,
  student:(type,data) => <StudentForm type={type} data={data} />,
  announcement:(type,data) => <AnnouncementForm type={type} data={data} />,
  attendance:(type,data) => <AttendanceForm type={type} data={data} />,
  class:(type,data) => <ClassForm type={type} data={data} />,
  event:(type,data) => <EventForm type={type} data={data} />,
  exam:(type,data) => <ExamForm type={type} data={data} />,
  lesson:(type,data) => <LessonForm type={type} data={data} />,
  parent:(type,data) => <ParentForm type={type} data={data} />,
  result:(type,data) => <ResultForm type={type} data={data} />,
  assignment:(type,data) => <AssignementForm type={type} data={data} />,
  subject:(type,data) => <SubjectForm type={type} data={data} />,
  
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number | string;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FAE27C]"
      : type === "update"
      ? "bg-[#C3EBFA]"
      : "bg-[#CFCEFF]";

  const [open, setOpen] = useState(false);

  const Form = ()=>{
    return type === "delete" && id ? 
    (<form action="" className="p-4 flex flex-col gap-4 ">
      <span className="text-center font-medium text-gray-800">All data will be lost. Are you sure you want to delete this {table}?</span>
      <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
    </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type,data)
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
