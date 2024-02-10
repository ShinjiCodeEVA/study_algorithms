import Sidebar from "./Sidebar"
import Rightbar from "./Rightbar"
import Navbar from "./Navbar"

//ml-[22em]

const MainLayout = ({children}) => {
  return (
    <main className="">
      <section>
        <Sidebar />
      </section>
      <div className="ml-[330px]"> 
        <section>
          <Navbar />
        </section>
        <section className="mr-[300px]">{children}</section>
        <section>
          <Rightbar />
        </section>
      </div>
    </main>
  )
}

export default MainLayout