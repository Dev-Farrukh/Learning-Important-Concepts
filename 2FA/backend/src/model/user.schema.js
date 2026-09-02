import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import envVariables from "../config/env.config.js";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    firstName : {
        type : String ,
        required : true,
    },
    lastName : {
        type : String ,
        required : true,
    },
    userName : {
        type : String ,
        required : true,
        unique : true,
    },
    password : {
        type : String ,
        required : true,
        select: false
    },
    role : {
        type : String ,
        enum : ["admin" , "user"],
        default : "user",
    }
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({id : this._id,} , envVariables.TOKEN_SECRET , {expiresIn : "48h"})
}
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password , this.password)
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password , 10)
}

const userModel = mongoose.model("user" , userSchema)

export default userModel