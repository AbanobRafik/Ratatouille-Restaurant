import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDb from "./DataBase/Database.js";
import router from "./routes/router.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

dotenv.config();

/**
 * * Enable CORS so that frontend (React) on a different origin can make requests
 * * and allow sending cookies for authentication (JWT in httpOnly cookie)
 */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use("/auth", authRouter);
connectDb();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
