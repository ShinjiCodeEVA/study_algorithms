import { useEffect } from "react"
import { useParser } from "../../../hooks/useParser"

export const Heading = ({title, platform, readTime}) => {


  return (
    <div>
         <h1 className="text-slate-blue text-2xl font-semibold">{`[${platform}] - ${title}`}</h1>
         <div className="flex items-center gap-3 text-gray-400 mt-1">
           <span>
             <small>by</small>
             <span className="ml-1 text-black">Neeko</span>
           </span>
           <span className="flex item-center gap-5">
             <p className="text-md">June 30, 2023</p>
             <div className="h-[15px] mt-1 bg-gray-400 border"></div>
           </span>
           <span className="flex item-center gap-5">
             <p className="text-md">0 comment</p>
             <div className="h-[15px] mt-1 bg-gray-400 border"></div>
           </span>
           <span className="flex item-center gap-5">
             <p className="text-md">{readTime} mins read</p>
           </span>
         </div>
    </div>
  )
}
