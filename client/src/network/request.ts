import { HttpAdapter } from "../common/ports";
import { AxiosStatic, AxiosInstance, AxiosResponse } from "axios";

class HttpAdapterAxiosImpl implements HttpAdapter {
    token?: string; 
    axios: AxiosInstance;

    constructor(axios: AxiosStatic, baseURL: string) {
        if (baseURL) { 
            this.axios = axios.create({
                baseURL,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
        } else { 
            this.axios = axios;
        }
    }

    get(url: string, options?: Object): Promise<AxiosResponse> {
        try {
            // config here if any 

            return this.axios?.get(url, {});
        } catch (err) {
            throw err;
        }
    }
}

export default HttpAdapterAxiosImpl;