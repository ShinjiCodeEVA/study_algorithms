import Sidebar from "./Sidebar"
import Rightbar from "./Rightbar"
import Navbar from "./Navbar"
import { useState, useEffect } from "react"

const MainLayout = ({children}) => {

  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  
  useEffect(() => {
    const breakpoint = window.matchMedia("(max-width: 950px)");

    const handleResize = () => {
      if (breakpoint.matches) {
        setIsSidebarHidden(true);
      } else {
        setIsSidebarHidden(false);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);     
    };
  }, []);

  return (
    <main>
      <section>
        <Sidebar isSidebarHidden={isSidebarHidden} />
      </section>
      <div className={`${isSidebarHidden ? 'ml-0' :'ml-[330px] ' } transition-all`}> 
        <section>
          <Navbar />
        </section>
        <div className="xl:flex">
          <section>
            {children}
          </section>
          <section>
            <Rightbar />
          </section>
        </div>
      </div>
    </main>
  )
}

export default MainLayout