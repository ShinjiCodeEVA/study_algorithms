import { Icon } from "../../atoms/Icon"
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { IoLogoStackoverflow } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppBarProp } from ".";
import { SolutionType } from "../../../common/types";
import { problems } from "../../../data/problems";
import { useEffect, useState } from "react";

const socs = [
    {name: "facebook", link: "#", icon: <RiFacebookFill className="text-base" />},
    {name: "twitter", link: "#", icon: <FaXTwitter className="text-sm" />},
    {name: "youtube", link: "#", icon: <PiYoutubeLogo />},
    {name: "gmail", link: "#", icon: <MdOutlineMail />},
    {name: "github", link: "#", icon: <VscGithub />},
    {name: "stackoverflow", link: "#", icon: <IoLogoStackoverflow />}
]

const posts: string[] = []

const populateRecent = (): void => { 
  const entity = Object.keys(problems)
                .map((key) => (problems as any)[key])
                .map((solution) => solution
                .map((problem: SolutionType) => {
                  const p = problem.problem;
                
                  posts.push(`[LEETCODE-${p.title.toUpperCase()}]`);
                }))
              
}

populateRecent();



export const AppBar = ({toggleSideBar}: AppBarProp) => {
      
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(0);
  const [animateSlideIn, setAnimateSlideIn] = useState<boolean>(false); // Control slide animation   

  
  useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPostIndex((prevIndex:number) => (prevIndex + 1) % posts.length);
            setAnimateSlideIn(true); 

            setTimeout(() => setAnimateSlideIn(false), 500); 
        }, 5000); 

        return () => clearInterval(intervalId); 
  }, [posts.length]); 


  return (
    <header className={`bg-slate-black flex lg:flex-row gap-4 lg:gap-0 flex-col py-[22px] sm:py-3 lg:py-0 items-center justify-center lg:justify-between laptop:ml-[330px] text-white px-9  `}>
        <div 
            className="triangle desktop:pointer-events-none"
            onClick={toggleSideBar} >
            <Icon>
                <RxHamburgerMenu className="text-[26px] font-semibold absolute top-1 left-1" />
            </Icon>
        </div>
        <div className={`text-xs lg:flex-row flex-col items-center gap-3 font-semibold hidden sm:flex`}>
            <div className="flex items-center gap-2">
                <div className="bg-slate-blue py-2 px-3">
                    <p>TOP POSTS</p>
                </div>
                <div className={`flex items-center text-[12px] text-dark-gray cursor-pointer`}>
                    <Icon><FaAngleLeft className="hover:text-white" /></Icon>
                    <Icon><FaAngleRight className="hover:text-white" /></Icon>
                </div>
            </div>
            <p className={`transition duration-500 ease-in-out transform ${animateSlideIn ? '-translate-y-8' : 'translate-y-0'}`}>
                {posts[currentPostIndex]}
            </p>
        </div>


        <nav >
            <ul className={`flex items-center gap-3`}>
                {socs.map((soc) => {
                    return(
                        <li 
                            className="hover:text-slate-blue cursor-pointer"
                            key={soc.name}>
                            <Icon>{soc.icon}</Icon>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </header>
  )
}
