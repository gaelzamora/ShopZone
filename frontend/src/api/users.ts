import {authAxios, axi} from './useAxios'

export const search_users = async (query: string) => {
    const response = await authAxios.get(`/users/search/?query=${query}`)
    return response.data
}

export const delete_user = async (id: number) => {
    await authAxios.delete(`/users/delete/${id}/`)
}

export const registerRequest = async (email: string, first_name: string, last_name: string, password: string) => {
    await axi.post("/users/register/", {
        email, 
        first_name, 
        last_name, 
        password
    })
}

export const loginRequest = async (email: string, password: string) => {
    const response = await axi.post("/users/login/", {
        email, 
        password
    })
    return response
}

export const get_users = async () => {
    const response = await authAxios.get("/users/get/")
    return response.data
}