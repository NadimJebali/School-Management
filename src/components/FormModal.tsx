"use client";
import Image from "next/image";
import { useState } from "react";

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
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FAE27C]"
      : type === "update"
      ? "bg-[#C3EBFA]"
      : "bg-[#CFCEFF]";

      const [open, setOpen] = useState(false);
  return (
    <button
      className={`${size} flex items-center justify-center rounded-full hover:cursor-pointer ${bgColor}`}
      onClick={()=> setOpen(true)}
    >
      <Image src={`/${type}.png`} alt={`${type} icon`} width={16} height={16} />
      {
      open && <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded-md text-gray-800">
          hello
        </div>  
      </div>
      }
    </button>
  );
};

export default FormModal;
