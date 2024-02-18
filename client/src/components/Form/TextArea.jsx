

export const TextArea = ({placeholder, onChange}) => {
  return (
    <textarea 
        onChange={onChange}
        name="" 
        id="" 
        cols="30" 
        rows="10" 
        placeholder={placeholder}
        className="outline-none border p-3" />
  )
}
