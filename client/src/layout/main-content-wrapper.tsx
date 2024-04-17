import { SideBar } from "../components/organisms/SideBar/sidebar"
import { useSideBar } from "../hooks/useSideBar"
import { AppBar } from "../components/organisms/AppBar";
import { MainContentProps } from "./main-content-wrapper.interface";
import { useLocation } from "react-router-dom";

export const MainContentWrapper = ({children}: MainContentProps) => {
  const {isSideBarVisible, toggleSideBar} = useSideBar();

  const location = useLocation();
  
  const currentPath = location.pathname.slice(1).split("/");
  //currentPath.pop();

  console.log(currentPath)

  return (
    <div className="font-body-font desktop:mr-0 min-w-[280px]">
      <SideBar isSideBarVisible={isSideBarVisible} position="left" />
      <AppBar isSideBarVisible={isSideBarVisible} toggleSideBar={toggleSideBar} />
      <div className="text-dark-gray text-xs ml-10 laptop:ml-[370px] mt-7 flex items-center gap-3">
      <span>{`Home`}</span>
      <span>{`>`}</span>
        {currentPath.map((path, index) => {
          return <>
            <span key={path}>{`${path.includes('linked') ? "Linked List" : path.charAt(0).toUpperCase() + path.substring(1)} `}</span>
            {index !== currentPath.length - 1 && <span>{`>`}</span>} </>
        })}
      </div>
      <div className={`flex flex-col desktop:flex-row ml-0 laptop:ml-[330px] justify-between 2xl:justify-center `}>
        {children}
        <SideBar position="right" />
      </div>
    </div>
  );
}
