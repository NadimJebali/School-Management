import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/app/lib/data";
import Image from "next/image";
import prisma from "@/app/lib/prisma";
import { ITEM_PER_PAGE } from "@/app/lib/settings";
import { Prisma } from "@prisma/client";

type ResultList = {
  id:number;
  title:string;
  studentName:string;
  studentSurname:string;
  teacherName:string;
  teacherSurname:string;
  score:number;
  className:string;
  startTime: Date;
}

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: ResultList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
  >
    <td className="flex items-center gap-4 p-4 text-[#1F2937]">{item.title}</td>
    <td className="text-[#1F2937]">{item.studentName + " " + item.studentSurname}</td>
    <td className="hidden md:table-cell text-[#1F2937]">{item.score}</td>
    <td className="hidden md:table-cell text-[#1F2937]">{item.teacherName + " " + item.teacherSurname}</td>
    <td className="hidden md:table-cell text-[#1F2937]">{item.className}</td>
    <td className="hidden md:table-cell text-[#1F2937]">{new Intl.DateTimeFormat("en-US").format(item.startTime)}</td>
    <td>
      <div className="flex items-center gap-2">
        {(role === "admin" || role === "teacher") && (
          <>
            <FormModal table="result" type="update" data={item} />
            <FormModal table="result" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const ResultListPage = async ({searchParams}:{searchParams:{[key:string]:string | undefined};

}) => {


  const {page, ...queryParams}= searchParams;

  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITIONS

  const query:Prisma.ResultWhereInput = {}

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "studentId":
            query.studentId = value
            break;
          case "search":
          query.OR = [
            {exam:{title:{contains:value, mode:"insensitive"}}},
            {student:{name:{contains:value, mode:"insensitive"}}},
          ];
          break;
          default:
            break;
        }
      }
    }
  }

  const [dataRes, count] = await prisma.$transaction([
      prisma.result.findMany({
        where: query,
          include:{
            student:{select: {name:true, surname:true}},
            exam:{include:{lesson:{
              select:{
                class:{select:{name:true}},
                teacher:{select:{name:true, surname:true}},
              },
            },
          },
        },
        assignment:{include:{lesson:{
              select:{
                class:{select:{name:true}},
                teacher:{select:{name:true, surname:true}},
              },
            },
          },
        },
        },
          take:ITEM_PER_PAGE,
          skip:ITEM_PER_PAGE * (p-1),
      }),
      prisma.result.count({where: query}),
  ]);

  const data = dataRes.map(item =>{
    const assessement = item.exam || item.assignment;

    if(!assessement)return null;

    const isExam = "startTime" in assessement;

    return{
      id:item.id,
      title:assessement.title,
      studentName:item.student.name,
      studentSurname:item.student.surname,
      teacherName:assessement.lesson.teacher.name,
      teacherSurname:assessement.lesson.teacher.surname,
      score:item.score,
      className:assessement.lesson.class.name,
      startTime: isExam ? assessement.startTime : assessement.startDate
    }
  })

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-[#1F2937]">
          All Results
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
            {(role === "admin" || role === "teacher") && (
              <FormModal table="result" type="create" />
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

export default ResultListPage;
