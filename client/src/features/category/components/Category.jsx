

export const Category = ({ title, path, index, len }) => {
  
  return (
    <div className="font-light text-base pt-3">
        { title.toUpperCase() }
        { index !== len - 1 && 
        <div className="mt-3 w-full h-[1px] bg-slate-gray"></div>} 
    </div>
  )
}
