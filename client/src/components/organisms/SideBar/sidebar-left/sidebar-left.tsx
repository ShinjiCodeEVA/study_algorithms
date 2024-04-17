import { SideBarLeftProp } from "./sidebar-left.interface"
import { Category } from "../../../molecules/Category";
import { Button } from "../../../atoms/Button";
import { Input } from "../../../atoms/Input";
import { Icon } from "../../../atoms/Icon";
import { CategoryType } from "../../../../common/types";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../../common/enums";


export const SideBarLeft = (props: SideBarLeftProp) => {
  const {categories, isSideBarVisible} = props;
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (phrase: string) => {
    setInput(phrase);
  }

  const handleEnterPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      navigate(`/search/${input}`); 
      setInput('');
    }

    console.log(e.key)
  };

  
  const handleNavigate = (label: string) => {
    if (label === "home")
      navigate(`/`);
    else
      navigate(`${Routes.CATEGORY}/${label}`);
  }

 

  return (
    <div  className={`cursor-pointer w-[330px] border h-full px-4 py-7 fixed sidepanel bg-white ${isSideBarVisible ? 'show' : 'hide'}`}>
      <div>
        <img src="https://studyalgorithms.com/wp-content/uploads/2014/07/3.png" alt="" />
      </div>
      
      <div className={`border flex items-center justify-between px-4 mt-9`}>
        <Input 
          value={input} 
          handleInputChange={handleSearch} 
          placeholder="Type and hit enter..." 
          onKeyPress={handleEnterPress}
           />
        <Icon 
          onClick={ () => { navigate(`/search/${input}`), setInput('') }} >
          <FaMagnifyingGlass 
          className="text-gray-white"/>
        </Icon>
      </div>

      <div className={`mt-10`}>
        {categories.map((category: CategoryType, index: number) => {
          return <Category
                  key={category.label}
                  label={category.label}
                  index={index} 
                  onNavigate={handleNavigate}/>
        })}
      </div>

      <div className="mt-10">
        <p className="font-bold">If you found this website helpful</p>
        <Button className="flex items-center bg-slate-blue rounded-md text-white px-3 py-2 shadow-lg mt-1">
          <Icon><SiBuymeacoffee /></Icon>
          <span>Buy me a coffee</span>
        </Button>
      </div>
    </div>
  )
}
