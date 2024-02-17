import { Button } from "../../../components/Elements"
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "../../../components/Elements";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

export const Problem = ({id, tags, index, title, readTime, description}) => {
 
  const tag = tags.substring(0, 1).toUpperCase() + tags.substring(1)

  return (
    <div className={`flex flex-col gap-4 items-start mb-10 ${index !== 0 ? 'border-t-[1px]' : ''}`}>
        <div className={index !== 0 ? 'mt-4': ''}></div>
        <Button variant="tags">{tag}</Button>
        <h3 className="font-semibold text-lg mb-[-10px]">{`[LeetCode] - ${title}`}</h3>
        <small className="text-gray-400">{readTime} mins read</small>
        <div className="border border-slate-blue w-[40px]"></div>
        <article>
            {description}
        </article>  
        <Link path={`/category/${tag?.toLowerCase()}/${id}`}>  
            <Button variant="ghost">
                READ MORE
                <div className="ml-2 flex text-xs">
                    <IoIosArrowForward/>
                    <IoIosArrowForward className="ml-[-15px]"/>
                </div>
            </Button>
        </Link>
        
        <div className="flex items-center w-full gap-2">
            <div className="h-[1px] bg-slate-gray w-[50%]"></div>
            <div className="flex gap-3 items-center">
                <IoMdHeartEmpty/>
                <FaFacebookF className="text-sm" />
                <FaXTwitter className="text-sm" />
                <TiSocialLinkedin/>
                <FaWhatsapp/>
                <IoMdMail/>
            </div>
            <div className="h-[1px] bg-slate-gray w-[50%]"></div>
        </div>
    </div>
  )
}
