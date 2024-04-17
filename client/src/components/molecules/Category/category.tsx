import { CategoryProp } from "."

export const Category = (props: CategoryProp) => {
  const {label, index, onNavigate, ...rest} = props;  

  const onClickNavigate = () => { 
    onNavigate(label);
  }

  return (
    <div 
        onClick={onClickNavigate}
        className={`text-[1rem]  font-thin ${index !== 8 ? 'border-b-[1px]' : '' }  py-2`} 
        {...rest}>
        {label.toUpperCase()}
    </div>
  )
}
