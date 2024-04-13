import { useCallback } from "react"
import { InputProp } from "."

export const Input = (props: InputProp) => {
  const {value, placeholder, handleInputChange, className, ...rest} = props

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    handleInputChange(value);
  }, [])

  return (
    <input  
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`outline-none p-2 py-3 text-sm ${className} `}
        {...rest}
    />
  )
}
