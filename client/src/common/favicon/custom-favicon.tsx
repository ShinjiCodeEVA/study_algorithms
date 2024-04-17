import React from 'react';
import { Link } from 'react-router-dom'; // Or your preferred routing library

interface FaviconProps {
  src: string; // Explicitly define the type of the 'src' prop
}

export const CustomFavicon = ({ src }: FaviconProps) => {
  return (
    <link rel="icon" type="image/x-icon" href={src} />
  );
};
