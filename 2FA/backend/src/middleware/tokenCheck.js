import jwt from "jsonwebtoken"
import envVariables from "../config/env.config.js"
import userModel from "../model/user.schema.js"

const tokenValid = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token
    if (!token) return res.status(400).json({ message: "Token not found" })

    try {
        const decoded = jwt.verify(token, envVariables.TOKEN_SECRET)
        const user = userModel.findById(decoded._id)
        if (!user) return res.status(400).json({ message: "Invalid Token" })
        req.user = user
        next()
    } catch (error) {
        // eslint-disable-next-line preserve-caught-error
        throw new Error(`Can not decode token ${error.message}`)
    }
}

export default tokenValid