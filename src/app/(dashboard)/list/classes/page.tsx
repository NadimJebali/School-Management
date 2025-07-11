import { classesData, role } from "@/app/lib/data";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    header: "Class Name",
    accessor: "name", // Always visible
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden sm:table-cell", // Show from small screens (≥640px)
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden sm:table-cell", // Match visibility with Capacity
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell", // Show from medium screens (≥768px)
  },
  {
    header: "Actions",
    accessor: "action", // Always visible
  },
];


type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const ClassesList = () => {


  const renderRow = (item: Class) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
  >
    {/* Class Name - always visible */}
    <td className="text-black p-4">{item.name}</td>

    {/* Capacity - visible on small screens and up */}
    <td className="text-black hidden sm:table-cell">{item.capacity}</td>

    {/* Grade - visible on small screens and up */}
    <td className="text-black hidden sm:table-cell">{item.grade}</td>

    {/* Supervisor - visible on medium screens and up */}
    <td className="text-black hidden md:table-cell">{item.supervisor}</td>

    {/* Actions - always visible */}
    <td className="px-4">
      <div className="flex items-center gap-2">
        <Link href={`/list/classes/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C3EBFA]">
            <Image src="/edit.png" alt="Edit" height={16} width={16} />
          </button>
        </Link>
        {role === "admin" && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#CFCEFF]">
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
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">All Classes</h1>
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
        <Table columns={columns} renderRow={renderRow} data={classesData}/>
      {/* pagination */}
        <Pagination />
    </div>
  );
};

export default ClassesList