import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();

// default app setup

app.use(
  cors({
    credentials: true
  })
);
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Routers

// Server Live



// Handle Error


export default app