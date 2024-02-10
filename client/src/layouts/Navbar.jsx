import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";

const Navbar = () => {

  const paths = ["Home", "Arrays"]
    
  return (
    <header className="">
        <div className="bg-slate-dark text-white text-xs font-semibold flex justify-between px-9">
            <div className="flex items-center gap-2">
                <div className="bg-slate-blue h-[35px] flex items-center px-3">TOP POST</div>
                <div className="flex items-center">
                    <IoIosArrowBack />
                    <IoIosArrowForward />
                </div>
                <p>[LEETCODE]-LONGEST COMMOM PREFIX SOLUTION</p>
            </div>
            
            <div className="flex items-center gap-3 text-[13px]">
                <FaFacebookF/>
                <FaXTwitter/>
                <FaYoutube/>
                <IoMdMail/>
                <FaGithub/>
                <FaStackOverflow/>
                <MdOutlineWifi/>
            </div>
        </div>
        <div className="px-9 mt-8">
            <ul className="flex gap-2 items-center text-sm text-gray-400">
                {paths.map((path, index) => {
                    return (
                        <li key={index} className="flex items-center gap-2">
                            <span>{path}</span>
                            { index !== paths.length - 1 &&
                            <IoIosArrowForward/> }
                        </li>  )
                })  }
            </ul>
        </div>
    </header>
  )
}

export default Navbar