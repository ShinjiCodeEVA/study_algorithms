interface FaviconProps {
  src: string; 
}

export const CustomFavicon = ({ src }: FaviconProps) => {
  return (
    <link rel="icon" type="image/x-icon" href={src} />
  );
};
