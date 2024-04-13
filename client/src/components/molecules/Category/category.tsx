import { CategoryProp } from "."

export const Category = (props: CategoryProp) => {
  const {label, index, ...rest} = props;  

  return (
    <div 
        className={`text-[1rem]  font-thin ${index !== 8 ? 'border-b-[1px]' : '' }  py-2`} 
        {...rest}>
        {label.toUpperCase()}
    </div>
  )
}
