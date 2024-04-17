import { useNavigate } from 'react-router-dom';

export const useNavigator = () => {
  const navigate = useNavigate(); 

  const navigator = (path: string) => {
    const segment = path.toLowerCase();
    navigate(segment);
  };

  return navigator;
};
