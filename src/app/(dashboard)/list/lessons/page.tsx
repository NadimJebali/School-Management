import { lessonsData, role } from "@/app/lib/data";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    header: "Subject Name",
    accessor: "subject", // matches your Lesson type property
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden sm:table-cell", // match row visibility below
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

type Lesson = {
  id: number;
  subject: string;  // changed from 'name' to 'subject' to align with data
  class: string;
  teacher: string;
};

const LessonsList = () => {


  const renderRow = (item: Lesson) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]">
      <td className="text-gray-800 flex items-center gap-4 p-4">
        {item.subject}
      </td>
      <td className="text-gray-800">
        {item.class}
      </td>
      <td className="text-gray-800 hidden sm:table-cell">
        {item.teacher}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#A1D9FF] hover:cursor-pointer bg-[#C3EBFA]">
              <Image src="/edit.png" alt="Edit" height={16} width={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#A8A7FF] hover:cursor-pointer bg-[#CFCEFF]">
              <Image src="/delete.png" alt="Delete" height={16} width={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );


  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/filter.png" alt="logo" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/sort.png" alt="logo" width={14} height={14} />
            </button>
            {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/plus.png" alt="logo" width={14} height={14} />
            </button>
            )}
          </div>
        </div>
      </div>
      {/* list */}
        <Table columns={columns} renderRow={renderRow} data={lessonsData}/>
      {/* pagination */}
        <Pagination />
    </div>
  );
};

export default LessonsList