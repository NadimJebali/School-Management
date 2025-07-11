import { role, studentsData, teachersData } from "@/app/lib/data";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
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

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const StudentList = () => {


 const renderRow = (item: Student) => (
  <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]">
    {/* Info (Always visible) */}
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.photo}
        alt={item.name}
        width={40}
        height={40}
        className="hidden sm:block w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <h3 className="text-gray-800 font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item.class}</p>
      </div>
    </td>

    {/* Student ID (visible from md and up) */}
    <td className="hidden md:table-cell text-gray-800">{item.studentId}</td>

    {/* Grade (visible from md and up) */}
    <td className="hidden md:table-cell text-gray-800">{item.grade}</td>

    {/* Phone (visible from lg and up) */}
    <td className="hidden lg:table-cell text-gray-800">{item.phone}</td>

    {/* Address (visible from lg and up) */}
    <td className="hidden lg:table-cell text-gray-800">{item.address}</td>

    {/* Actions (Always visible) */}
    <td className="px-2">
      <div className="flex items-center gap-2">
        <Link href={`/list/students/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#A1D9FF] hover:cursor-pointer bg-[#C3EBFA]">
            <Image src="/view.png" alt="view" height={16} width={16} />
          </button>
        </Link>
        {role === "admin" && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#A8A7FF] hover:cursor-pointer bg-[#CFCEFF]">
            <Image src="/delete.png" alt="delete" height={16} width={16} />
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
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#FAE27C]">
              <Image src="/filter.png" alt="logo" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#FAE27C]">
              <Image src="/sort.png" alt="logo" width={14} height={14} />
            </button>
            {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#FAE27C]">
              <Image src="/plus.png" alt="logo" width={14} height={14} />
            </button>
            )}
          </div>
        </div>
      </div>
      {/* list */}
        <Table columns={columns} renderRow={renderRow} data={studentsData}/>
      {/* pagination */}
        <Pagination />
    </div>
  );
};

export default StudentList