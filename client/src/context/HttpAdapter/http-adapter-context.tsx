import React, { createContext, useState, useEffect } from "react"
import { HttpAdapter } from "../../common/ports";
import HttpAdapterAxiosImpl from "../../network/request";
import axios from "axios";

export const HttpAdapterContext = createContext<HttpAdapter>({} as HttpAdapter); 

export const HttpAdapterProvider = ({ children }: { children: React.ReactNode }) => {
    const [httpAdapter, setHttpAdapter] = useState<HttpAdapter>({} as HttpAdapter);

    useEffect(() => {
        setHttpAdapter(new HttpAdapterAxiosImpl(axios, "http://localhost:3000"))
    }, [])

    return (
        <HttpAdapterContext.Provider value={httpAdapter}>
            {children}
        </HttpAdapterContext.Provider>
    )
}