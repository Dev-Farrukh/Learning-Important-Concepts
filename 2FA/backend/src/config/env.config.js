/* eslint-disable no-undef */
import "dotenv/config"

const NAMES = ["PORT" , "MONGO_URI"]

NAMES.forEach((items)=> {
    if(!process.env[items]){
        throw new Error(`Variable ${items } is missing `)
    }

})

const envVariables = Object.fromEntries(
    NAMES.map((items)=> [items , process.env[items]])
)


export default envVariables