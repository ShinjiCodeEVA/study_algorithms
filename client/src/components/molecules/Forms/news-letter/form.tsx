import { Input } from "../../../atoms/Input"
import { Button } from "../../../atoms/Button"
import { FormProp } from "./form.interface"
import { useState } from "react"
import { NewsLetterType } from "../../../../common/types"

const initialVal = {
    email: ''
}

export const Form = ({handleSubmit}: FormProp) => {
  
  const [data, setData] = useState<NewsLetterType>(initialVal);
    
  const handlInputChange = (value: string) => {
    setData({email: value});
  }

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
        <Input 
            value={data.email}
            placeholder="Your email address"
            handleInputChange={handlInputChange}
            className="w-full outline border-[1px] px-4"
        />
        <Button
            className={`bg-slate-white py-2 text-sm font-semibold w-full mt-4`}
        >SIGN UP</Button>
    </form>
  )
}
