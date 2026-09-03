import axiosClient from "../../../axiosClient"

export const registerUser = async (payload) => {
    
    const response = await axiosClient.post("/auth/register" , {
        firstName : payload.firstName,
        lastName : payload.lastName ,
        userName : payload.username,
        password : payload.password,
    })
    if (response.status !== 201) {
        console.log("ffasas", response.data);
        
        return response.data
    }
    return response.data

}