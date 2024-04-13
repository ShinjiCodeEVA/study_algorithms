import { ButtonProp } from ".";

export const Button = (props: ButtonProp) => {
  const {children , ...rest} = props;

  return (
    <button {...rest}>
        {children}
    </button>
  )
}
