import { useContext } from "react";
import { HttpAdapterContext } from "../../context/HttpAdapter";

export const useHttpAdapter = () => {
    const httpAdapter = useContext(HttpAdapterContext);
    return httpAdapter;   
}