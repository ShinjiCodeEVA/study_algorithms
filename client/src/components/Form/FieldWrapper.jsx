

const FieldWrapper = ({children, icon}) => {
  return (
    <div  className="w-full flex items-center border p-3 justify-between">
      {children}
      { icon && 
      icon}
    </div>
  )
}

export default FieldWrapper