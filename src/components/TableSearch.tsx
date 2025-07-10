import Image from 'next/image';

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex text-xs items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <Image src="/search.png" alt="search" width={16} height={16} />
            <input
              className="bg-transparent outline-none text-sm text-black placeholder-gray-500"
              type="text"
              placeholder="Search..."
            />
          </div>
  )
}

export default TableSearch