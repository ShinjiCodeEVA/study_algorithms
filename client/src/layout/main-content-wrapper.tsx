import { SideBar } from "../components/organisms/SideBar/sidebar"
import { useSideBar } from "../hooks/useSideBar"
import { AppBar } from "../components/organisms/AppBar";
import { MainContentProps } from "./main-content-wrapper.interface";

export const MainContentWrapper = ({children}: MainContentProps) => {
  const {isSideBarVisible, toggleSideBar} = useSideBar();

  return (  
    <div className="font-body-font"> 
      <SideBar 
        isSideBarVisible={isSideBarVisible}
        position="left"/>
      <AppBar 
        isSideBarVisible={isSideBarVisible}
        toggleSideBar={toggleSideBar}/>
      <div className="text-dark-gray text-xs ml-[370px] mt-10">{`Home   >   Arrays`}</div>  
      <div className={`flex flex-col desktop:flex-row ml-0 laptop:ml-[330px]`}>
        {children}
        <SideBar position="right"/>
      </div>
    </div>
  )
}
