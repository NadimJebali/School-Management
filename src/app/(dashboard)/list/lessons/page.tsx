import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role } from "@/app/lib/data";
import Image from "next/image";
import prisma from "@/app/lib/prisma";
import { ITEM_PER_PAGE } from "@/app/lib/settings";
import { Class, Lesson, Prisma, Subject, Teacher } from "@prisma/client";

type LessonList = Lesson & {subject:Subject} & {teacher:Teacher} & {class:Class}

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Class", accessor: "class" },
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const renderRow = (item: LessonList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
  >
    <td className="flex items-center gap-4 p-4 text-gray-800">{item.subject.name}</td>
    <td className="text-gray-800">{item.class.name}</td>
    <td className="hidden md:table-cell text-gray-800">{item.teacher.name + " " + item.teacher.surname}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="lesson" type="update" data={item} />
            <FormModal table="lesson" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const LessonListPage = async ({searchParams}:{searchParams:{[key:string]:string | undefined};

}) => {


  const {page, ...queryParams}= searchParams;

  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITIONS

  const query:Prisma.LessonWhereInput = {}

  if(queryParams){
    for(const [key,value] of Object.entries(queryParams)){
        if(value !== undefined){
        switch(key){
          case "teacherId":
            query.teacherId = value;
            break;
          case "classId":
            query.classId = parseInt(value);
            break;
          case "search":
            query.OR = [
              {
                subject:{name:{contains: value, mode: "insensitive"}}
              },
              {
                teacher:{name:{contains: value, mode: "insensitive"}}
              },
              {
                teacher:{surname:{contains: value, mode: "insensitive"}}
              }
            ]
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
      prisma.lesson.findMany({
        where: query,
          include:{
            subject:{select:{name:true}},
            teacher:{select:{name:true, surname:true}},
            class:{select:{name:true}},
          },
          take:ITEM_PER_PAGE,
          skip:ITEM_PER_PAGE * (p-1),
      }),
      prisma.lesson.count({where: query}),
  ]);
  

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/sort.png" alt="Sort" width={14} height={14} />
            </button>
            {role === "admin" && <FormModal table="lesson" type="create" />}
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

export default LessonListPage;
