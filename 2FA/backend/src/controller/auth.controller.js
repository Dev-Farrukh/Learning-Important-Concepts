import { validationResult } from "express-validator";
import userModel from "../model/user.schema.js";

export const registerUser = async (req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors : error.array()});
    }

    const {firstName, lastName , userName , password } = req.body;

    const existingUser = await userModel.findOne({userName})
    if(existingUser){
        return res.status(400).json({message : "User already exists"})
    }

    const hashedPassword = await userModel.hashPassword(password);
    const newUser = await userModel.create({
        firstName,
        lastName,
        userName,
        password : hashedPassword
    })
    if(!newUser){
        return res.status(500).json({message : "Internal server error" })
    }

    const authToken = newUser.generateAuthToken();
    res.cookie("token", authToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'  
    });  

    const userResponse = newUser.toObject();
    delete userResponse.password;      
    res.status(201).json({
        message : "User registered successfully",
        user : userResponse,
        authToken
    })
}

export const loginUser = async (req , res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {userName , password} = req.body
    const user = await userModel.findOne({userName}).select("+password")
    if (!user) return res.status(404).json({message : "User not found"})

    const isPassword =await  user.comparePassword(password)
    if (!isPassword) return res.status(404).json({message : "Invalid email or password"})

    const authToken = user.generateAuthToken();
    res.cookie("token", authToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'  
    }); 
    
    const userResponse = user.toObject();
    delete userResponse.password
    res.status(200).json({
        message : "User login successfully",
        user : userResponse,
        authToken
    })
    

}

export const logout = async (req , res) => {
 res.clearCookie("token" , {
    httpOnly : true ,
    secure : true ,
    sameSite : "none",
 })   
 return res.status(200).json({ message: "Logged out successfully" });
}

export const getMe = async (req , res) => {
    try {
        res.status(200).json({
            message : "User fetched successfully",
            user : req.user
        })
    } catch (error) {
        return res.status(400).json({error : error.message});   
    }
}