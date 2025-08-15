import prisma from '@/app/lib/prisma';
import Image from 'next/image';


const UserCard = async ({ type }: {type: "admin" | "teacher" | "student" | "parent" }) => {

  const modelMap : Record<typeof type, any> = {
    admin: prisma.admin,
    teacher: prisma.teacher,
    student: prisma.student,
    parent: prisma.parent
  }

  const data = await modelMap[type].count()


  return (
    <div className="rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] p-4 flex-1 min-w-[140px] shadow-md transition-transform hover:scale-[1.02] duration-200">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600 font-medium shadow-sm">
          2024/25
        </span>
        <Image src="/more.png" alt="options" width={16} height={16} />
      </div>

      {/* Stats */}
      <div className="mt-6">
        <h1 className="text-3xl font-bold text-gray-800">{data}</h1>
        <h2 className="capitalize text-sm font-medium text-gray-600 mt-1 tracking-wide">
          {type}s
        </h2>
      </div>
    </div>
  );
}
export default UserCard
