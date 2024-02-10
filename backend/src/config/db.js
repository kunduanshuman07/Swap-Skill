import mongoose from "mongoose";

const connectDB = async(connectionURL) => {
    try {
        await mongoose.connect(connectionURL);
        console.log('Connection established');
    } catch (error) {
        console.log('Database connection failed');
        console.error(error);
    }
}

export default connectDB;