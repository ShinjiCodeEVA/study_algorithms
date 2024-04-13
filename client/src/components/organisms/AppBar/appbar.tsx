import { Icon } from "../../atoms/Icon"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { IoLogoStackoverflow } from "react-icons/io5";

const socs = [
    {name: "facebook", link: "#", icon: <RiFacebookFill className="text-sm" />},
    {name: "twitter", link: "#", icon: <FaXTwitter className="text-xs" />},
    {name: "youtube", link: "#", icon: <PiYoutubeLogo />},
    {name: "gmail", link: "#", icon: <MdOutlineMail />},
    {name: "github", link: "#", icon: <VscGithub />},
    {name: "stackoverflow", link: "#", icon: <IoLogoStackoverflow />}
]

export const AppBar = () => {
  return (
    <header className={`bg-slate-black flex items-center justify-between ml-[330px] text-white px-9 `}>
        <div className={`text-xs flex items-center gap-3 font-semibold`}>
            <div className="bg-slate-blue py-2 px-3">
                <p>TOP POSTS</p>
            </div>
            <div className={`flex items-center text-[12px] text-dark-gray cursor-pointer`}>
                <Icon><FaAngleLeft className="hover:text-white" /></Icon>
                <Icon><FaAngleRight className="hover:text-white" /></Icon>
            </div>
            <p>[LEETCODE-NUMBERS SMALLER THAN]</p>
        </div>


        <nav >
            <ul className={`text-base flex items-center gap-3`}>
                {socs.map((soc) => {
                    return(
                        <li>
                            <Icon>{soc.icon}</Icon>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}
