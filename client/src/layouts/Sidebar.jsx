import { InputField }  from "../components/Form"
import { logo } from "../assets/constants"
import { Categories } from "../features/category" 
import { Button } from "../components/Elements"
import  coffee  from "../assets/coffee.png"
import { IoIosSearch } from "react-icons/io";

const Sidebar = () => { 
  return (
    <div className="py-6 px-5 h-screen w-[330px] border fixed">
      <img className="" src={logo} alt="" />
      <div className="mt-6">
        <InputField
          placeholder="Type and hit enter..."
          icon={<IoIosSearch className="text-lg text-gray-400" />}
        />
      </div>
      <div className="mt-6"> 
        <Categories/>
      </div>
      <div className="mt-10">
        <p className="text-lg font-bold pb-2">If you found this website helpful</p>
        <Button variant="outline">    
          <img
            className="w-[40px] " 
            src={coffee} 
            alt="" />
            <p className="font-bold">Buy me a coffee</p>
        </Button>
      </div>
    </div>
  )
}

export default Sidebar