"use client"

import { ITEM_PER_PAGE } from "@/app/lib/settings"
import { useRouter } from "next/navigation"
import { array } from "zod"

const Pagination = ({page, count}:{page:number, count:number}) => {

  const router = useRouter()

  const hasPerv = ITEM_PER_PAGE * (page -1) > 0;
  const hasNext = ITEM_PER_PAGE * (page -1) +ITEM_PER_PAGE < count;

  const changePage = (newPage:number)=>{
    const params = new URLSearchParams(window.location.search)
    params.set("page",newPage.toString())
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
    <div className='p-4 flex items-center justify-between text-gray-500'>
        <button disabled={!hasPerv} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed" onClick={()=>{changePage(page-1)}}>Prev</button>
        <div className="text-gray-800">
          {Array.from({length:Math.ceil(count/ITEM_PER_PAGE)}, (_,index)=>{
            const pageIndex = index+1;
            return(
              <button key={pageIndex} className={`px-2 rounded-sm ${page === pageIndex ? "bg-[#C3EBFA]" : ""
              }`}
              onClick={()=>{changePage(pageIndex)}}
              >
                {pageIndex}
              </button>
            )
          })}
        </div>
        <button disabled={!hasNext} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed" onClick={()=>{changePage(page+1)}}>Next</button>
    </div>
  )
}

export default Pagination