import axios, { AxiosResponse } from "axios";

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'

})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    get: (path: string) => client.get(path).then(responseBody),
    post: (path: string, body:{}) => client.post(path, body).then(responseBody),
    put: (path: string, body:{}) => client.put(path, body).then(responseBody),
    delete: (path: string) => client.delete(path).then(responseBody)
}

export const Post = {
    getPosts: (path: string) : Promise<any> => requests.get(path)
}
