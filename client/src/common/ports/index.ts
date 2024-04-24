export interface HttpAdapter {
    get(url: string, config: Object): Promise<any>; 
    // post
    // put
    // patch
    // delete
}