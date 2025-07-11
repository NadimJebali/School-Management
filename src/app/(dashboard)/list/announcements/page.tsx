import { announcementsData, eventsData, role } from "@/app/lib/data";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch"
import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
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

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const AnnouncementsList = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
    >
      <td className="text-gray-800 flex items-center gap-4 p-4">{item.title}</td>
      <td className="text-gray-800">{item.class}</td>
      <td className="text-gray-800 hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/events/${item.id}`}>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C3EBFA] hover:bg-[#A1D9FF] focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={`Edit event ${item.title}`}
              title="Edit"
            >
              <Image src="/edit.png" alt="Edit" height={16} width={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-[#CFCEFF] hover:bg-[#A8A7FF] focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label={`Delete event ${item.title}`}
              title="Delete"
            >
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
        <h1 className="hidden md:block text-lg font-semibold text-gray-800">All Announcements</h1>
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
        <Table columns={columns} renderRow={renderRow} data={announcementsData}/>
      {/* pagination */}
        <Pagination />
    </div>
  );
};

export default AnnouncementsList