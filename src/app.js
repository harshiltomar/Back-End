import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Use is for congfiguration and MiddleWare
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Limit to json acceptance limit
app.use(express.json({ limit: "16 kb" }));

// Configuration to url data
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//public assets file file creations
app.use(express.static("public"));

//cookieParser simple allows to access server to user browser cookies to perform CRUD operations
app.use(cookieParser());

export { app };
