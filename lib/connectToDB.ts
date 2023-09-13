import { db } from "./db"

export const connectToDB = async()=>{
    try {
       await db.$connect() 
       console.log("MongoDB connected")
    } catch (error: any) {
        throw new Error(error.message);
        
    }

}