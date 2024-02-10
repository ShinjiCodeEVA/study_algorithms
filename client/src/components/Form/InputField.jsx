import FieldWrapper from "./FieldWrapper"

export const InputField = ({placeholder, icon}) => {
  return (
    <FieldWrapper icon={icon}>
        <input
            type="text"
            className="outline-none text-sm "
            placeholder={placeholder}
        />
    </FieldWrapper>
  )
}
