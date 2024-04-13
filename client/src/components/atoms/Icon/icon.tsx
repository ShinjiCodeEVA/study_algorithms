import { IconProp } from "."

export const Icon = (props: IconProp) => {
  const {children, ...rest} = props;
    
  return (
    <div {...rest}>
        {children}
    </div>
  )
}
