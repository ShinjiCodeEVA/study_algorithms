

const FieldWrapper = ({children, icon}) => {
  return (
    <form className="w-full flex items-center border p-3 justify-between">
      {children}
      { icon && 
      icon}
    </form>
  )
}

export default FieldWrapper