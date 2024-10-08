import { get, patch, post } from "../utilities/request"

export const getCompany = async (id? : number | string) => {
    const query = id ? `company/${id}` : "company"
    const response = await get(query)
    return response
}

export const login = async (email: string, password: string) => {
    const response = await get(`company/login/email=${email}&password=${password}`)
    return response
    // /company/login/email=:email&password=:password
}

export const checkExist = async (attribute: string, value: string) => {
    const response = await get(`company/check/${attribute}/${value}`)
    return response
    // /company/check/:attribute/:value
}

export const createCompany = async (value) => {
    const result = await post('company', value)
    return result
}

export const editCompany = async (id: number | string, options) => {
    const result = await patch(`company/${id}`, options)
    return result
}