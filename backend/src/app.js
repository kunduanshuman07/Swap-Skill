import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import connectDB from "./config/db.js";

// App initialization
const app = express();

// Environment variables
dotenv.config();
const envvars = process.env;

// Database connection
connectDB(envvars.MONGODB_CONNECTION);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'DELETE', 'PATCH']
}));

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);



app.listen(envvars.PORT, '0.0.0.0', ()=>{
    console.log(`Listening to Port ${envvars.PORT}`);
});
