import Image from 'next/image';

interface UserCardProps {
  type: string;
}

export default function UserCard({ type }: UserCardProps) {
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
        <h1 className="text-3xl font-bold text-gray-800">1,233</h1>
        <h2 className="capitalize text-sm font-medium text-gray-600 mt-1 tracking-wide">
          {type}s
        </h2>
      </div>
    </div>
  );
}
