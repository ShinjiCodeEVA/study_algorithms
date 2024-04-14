import { ProblemProp } from "."
import { Button } from "../../../atoms/Button";
import { FaAngleRight } from "react-icons/fa6";
import { Icon } from "../../../atoms/Icon";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";

export const Problem = ({problem, index}: ProblemProp) => {
  const {tags, platform, title, readTime, description} = problem;  

  return (
    <div className={`text-slate-black ${index !== 0 ? "border-t": ""} `}>
        <Button
            className="bg-dark-gray text-white text-xs px-3 py-1">
            {tags[0]}
        </Button>
        <h3
            className="font-semibold text-lg mt-3">
            {`[${platform}] - ${title}`}
        </h3>
        <small 
            className="text-gray-400 border-slate-blue border-b py-3">
            {readTime} mins read
        </small>
        <div></div>
        <article 
            className="mt-6">
            {description}
        </article>
        <Button 
            className="flex text-xs font-semibold items-center gap-3 bg-slate-blue text-white py-2 px-3 mt-4">
            <span>READ MORE</span>
            <Icon  className="text-xs flex items-center " >
                <FaAngleRight />
                <FaAngleRight className="ml-[-8px]" />
            </Icon>
        </Button>

        <div className="flex items-center w-full gap-2 mt-5">
            <div className="h-[1px] bg-gray-white w-[50%]"></div>
            <Icon className="flex gap-3 items-center">
                <IoMdHeartEmpty/>
                <FaFacebookF className="text-sm" />
                <FaXTwitter className="text-sm" />
                <TiSocialLinkedin/>
                <FaWhatsapp/>
                <IoMdMail/>
            </Icon>
            <div className="h-[1px] bg-gray-white w-[50%]"></div>
        </div>
    </div>
  )
}
