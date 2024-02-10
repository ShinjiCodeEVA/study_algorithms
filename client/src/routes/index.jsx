import { useRoutes } from 'react-router-dom';
import Landing from '../features/misc/Landing';
import { publicRoutes } from './public'; 
import MainLayout from '../layouts/MainLayout';

export const AppRoutes = () => {
    const commonRoute = [{ path: '/', element: <Landing/> }]

    const element = useRoutes([...commonRoute, ...publicRoutes]);

    return <MainLayout>
            {element}
           </MainLayout>
         
}