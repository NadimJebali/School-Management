import { parentsData, role } from "@/app/lib/data";
import FormModal from "@/components/FormModal";
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
    header: "Student Names",
    accessor: "students",
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

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const ParentsList = () => {


  const renderRow = (item: Parent) => (
  <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]">
    {/* Parent Name & Email - Always visible */}
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="text-gray-800 font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500">{item.email}</p>
      </div>
    </td>

    {/* Students - visible from md and up */}
    <td className="hidden md:table-cell text-gray-800">
      {item.students.join(", ")}
    </td>

    {/* Phone - visible from lg and up */}
    <td className="hidden lg:table-cell text-gray-800">
      {item.phone}
    </td>

    {/* Address - visible from lg and up */}
    <td className="hidden lg:table-cell text-gray-800">
      {item.address}
    </td>

    {/* Actions - Always visible */}
    <td className="px-2">
      <div className="flex items-center gap-2">
        {role === "admin" && (<>
        {/* <Link href={`/list/parents/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#C3EBFA]">
            <Image src="/edit.png" alt="edit" height={16} width={16} />
          </button>
        </Link>
           <button className="w-7 h-7 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#CFCEFF]">
             <Image src="/delete.png" alt="delete" height={16} width={16} />
           </button> */}
          <FormModal table="parent" type="update" data={item}/>
          <FormModal table="parent" type="delete" id={item.id}/>
          </>
        )}
      </div>
    </td>
  </tr>
);



  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
      {/* top section */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#FAE27C]">
              <Image src="/filter.png" alt="logo" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#FAE27C]">
              <Image src="/sort.png" alt="logo" width={14} height={14} />
            </button>
            {role === "admin" && (
            //   <button className="w-8 h-8 flex items-center justify-center rounded-full hover:cursor-pointer bg-[#FAE27C]">
            //   <Image src="/plus.png" alt="logo" width={14} height={14} />
            // </button>
            <FormModal table="parent" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* list */}
        <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      {/* pagination */}
        <Pagination />
    </div>
  );
};

export default ParentsList