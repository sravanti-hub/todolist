const mongoose=require("./env/env");
const mongoose=require("mongoose");
const connectToDatabase=()=>{
    mongoose.connect(MONGO_URL,{});
    mongoose.connection.on("connected",()=>{
        console.log("successfully mongodb connected")
    });
}
module.exports={
    connectToDatabase,
}