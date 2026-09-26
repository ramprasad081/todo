import mongoose from "mongoose";


const dbConnect = async () => {
    try {

        if (!process.env.MONGODB_URL) {
            console.error("Connection string not found");
            process.exit(1);
        }


        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`🚀 MongoDB Atlas Connected`);
        return conn;
    } catch (error) {
        console.error(`❌ Connection Error: ${error.message}`);
        process.exit(1);
    }
};


export default dbConnect;