import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Class, Prisma, Subject, Teacher } from "@prisma/client";
import prisma from "@/app/lib/prisma";
import { ITEM_PER_PAGE } from "@/app/lib/settings";
import { object } from "zod";

type TeacherList = Teacher & {subjects:Subject[]} & {classes:Class[]}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];


const renderRow = (item: TeacherList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
  >


    <td className="flex items-center gap-4 p-4 text-[#1F2937]">
      <Image
        src={item.img || "/noAvatar.png"}
        alt=""
        width={40}
        height={40}
        className="md:block xl:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-[#6B7280]">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell text-[#1F2937]">{item.username}</td>
    <td className="hidden md:table-cell text-[#1F2937]">{item.subjects.map(subject=>subject.name).join(", ")}</td>
    <td className="hidden md:table-cell text-[#1F2937]">{item.classes.map(classItem=>classItem.name).join(", ")}</td>
    <td className="hidden lg:table-cell text-[#1F2937]">{item.phone}</td>
    <td className="hidden lg:table-cell text-[#1F2937]">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center hover:cursor-pointer rounded-full bg-[#C3EBFA]">
            <Image src="/view.png" alt="" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          <FormModal table="teacher" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const TeacherListPage = async ({searchParams}:{searchParams:{[key:string]:string | undefined};

}) => {


  const {page, ...queryParams}= searchParams;

  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITIONS

  const query:Prisma.TeacherWhereInput = {}

  if(queryParams){
    for(const [key,value] of Object.entries(queryParams)){
        if(value !== undefined){
        switch(key){
          case "classId":
            query.lessons = {some:{classId:parseInt(value),},};
            break;
          case "search":
            query.name = {contains:value, mode:"insensitive"}
            break;
            default:
              break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
      prisma.teacher.findMany({
        where: query,
          include:{
            subjects:true,
            classes:true,
          },
          take:ITEM_PER_PAGE,
          skip:ITEM_PER_PAGE * (p-1),
      }),
      prisma.teacher.count({where: query}),
  ]);
  
  


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-[#1F2937]">
          All Teachers
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="teacher" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default TeacherListPage;
