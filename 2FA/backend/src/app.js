import express from "express"
import cookieParser from "cookie-parser"
import dbConfig from "./config/db.config.js"
const app = express()

app.use(express.json())
app.use(cookieParser())
dbConfig()


app.get("/", (req, res) => {
    res.send("Server is running !")
})

export default app