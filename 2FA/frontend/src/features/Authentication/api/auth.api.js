import axiosClient from "../../../axiosClient"

export const registerUser = async (payload) => {

    try {
        const response = await axiosClient.post("/auth/register", {
            firstName: payload.firstName,
            lastName: payload.lastName,
            userName: payload.username,
            password: payload.password,
        })
        return response.data
    } catch (error) {
        console.error(error.response.data);
        throw error.response.data
    }
}

export const loginUser = async (payload) => {
    try {
        const response = await axiosClient.post("/auth/login", {
            userName: payload.username,
            password: payload.password
        })
        return response.data
    } catch (error) {
        console.error(error.response.data);
        throw error?.response?.data || "Sorry for the inconvinience"
    }

}