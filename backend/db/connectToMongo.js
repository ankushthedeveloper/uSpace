import mongoose from "mongoose";

const connectToMongo=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            // useNewUrlParser:true,
            // useUnifiedTopology:true,
            // useCreateIndex:true
        })
        console.log("Connected to MongoDB")
    } catch (error) {
        log.error("Error connecting to MongoDB", error)
    }
}

export default connectToMongo;