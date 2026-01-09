import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import movieRoute from "./routes/movieRoute.js";
import cors from "cors";

dotenv.config({
    path:".env",
})

databaseConnection();

const app=express();
//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions={
    origin:"https://netflix-project-backend.onrender.com",
    credentials:true,
}
app.use(cors(corsOptions));

//api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/movie",movieRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server listen at port ${process.env.PORT}`);
});
