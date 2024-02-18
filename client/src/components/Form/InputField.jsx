import FieldWrapper from "./FieldWrapper"
import clsx from "clsx";

export const InputField = ({placeholder, icon, className, onChange}) => {

  const merge = clsx("outline-none text-sm", className)

  return (
    <FieldWrapper icon={icon}>
        <input
            onChange={onChange}
            type="text"
            className={merge}
            placeholder={placeholder}
        />
    </FieldWrapper>
  )
}
