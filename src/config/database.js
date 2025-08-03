import mongoose from "mongoose";
import config from "./config.js";



async function databaseConnection(){
    try{
         await mongoose.connect(config.MONGO_URI)
         .then(()=>{
            console.log("connected with database")
         }).catch((error)=>console.log(error))
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default databaseConnection