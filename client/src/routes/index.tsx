import { useRoutes } from "react-router-dom"
import { publicRoutes } from "./public"
import { MainContentWrapper } from "../layout";
export const AppRoutes = () => {

    const element = useRoutes([...publicRoutes]);

    return <MainContentWrapper>{element}</MainContentWrapper>
    
}