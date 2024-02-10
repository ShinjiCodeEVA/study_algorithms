import clsx from "clsx";

const getVariant = (variant) => {
  switch (variant) {
    case "outline":
      return "btn-outline";
    case "ghost":
      return "btn-ghost";
    case "tags":
      return "btn-tags";
    case "subscribe":
      return "btn-subscribe";
    case "cloud":
      return "btn-cloud";
    default:
      return undefined;
  }
};

export const Button = ({children, variant}) => {  

  const merged = clsx("btn", getVariant(variant));

  return (
    <button 
      className={merged}>
      {children}
    </button>
  )
}
