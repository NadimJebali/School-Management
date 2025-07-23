"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const TableSearch = () => {

  const router = useRouter()

  const handlesubmit = (e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();

    const value = (e.currentTarget[0] as HTMLInputElement).value;

    const params = new URLSearchParams(window.location.search)
    params.set("search", value)
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
    <form onSubmit={handlesubmit} className="w-full md:w-auto flex text-xs items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <Image src="/search.png" alt="search" width={16} height={16} />
            <input
              className="bg-transparent outline-none text-sm text-black placeholder-gray-500"
              type="text"
              placeholder="Search..."
            />
    </form>
  )
}

export default TableSearch