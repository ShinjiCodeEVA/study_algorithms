import { Button } from "../../../components/Elements"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "../../../components/Elements";

export const Problem = ({tags, title, readTime, description}) => {
 
  const tag = tags.substring(0, 1).toUpperCase() + tags.substring(1)

  return (
    <div className="flex flex-col gap-4 items-start">
        <Button variant="tags">{tag}</Button>
        <h3 className="font-semibold text-lg mb-[-10px]">{`[LeetCode] - ${title}`}</h3>
        <small className="text-gray-400">{readTime} mins read</small>
        <div className="border border-slate-blue w-[40px]"></div>
        <article>
            {description}
        </article>  
        <Link path={`/category/${tag.toLowerCase()}/${title}`}>
            <Button variant="ghost">
                READ MORE
                <div className="ml-2 flex text-xs">
                    <IoIosArrowForward/>
                    <IoIosArrowForward className="ml-[-15px]"/>
                </div>
            </Button>
        </Link>
    </div>
  )
}
