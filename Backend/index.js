import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createServer } from "http";

import connectDb from "./DataBase/Database.js";
import router from "./routes/router.js";
import authRouter from "./routes/authRoutes.js";
import { initializeSocket } from "./socket/socket.js";

dotenv.config();

const app = express();
const server = createServer(app);

const io = initializeSocket(server);

app.set("io", io);

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

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});