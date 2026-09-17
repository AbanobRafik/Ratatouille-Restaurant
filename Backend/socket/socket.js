import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import userSchema from "../models/userModel.js";

// Extract a cookie value without using the cookie package
const getCookie = (cookieHeader, name) => {
  const cookies = cookieHeader.split(";");

  const targetCookie = cookies.find((item) =>
    item.trim().startsWith(`${name}=`),
  );

  return targetCookie
    ? decodeURIComponent(targetCookie.trim().slice(name.length + 1))
    : null;
};

export const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });

  // Authentication Middleware
  io.use(async (socket, next) => {
    try {
      const cookieHeader = socket.handshake.headers.cookie || "";

      const token = getCookie(cookieHeader, "token");

      // Allow guests to connect
      if (!token) {
        socket.data.user = null;
        return next();
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await userSchema.findById(decoded.id);

      if (!user) {
        return next(new Error("Unauthorized"));
      }

      socket.data.user = {
        id: user._id.toString(),
        role: user.role,
      };

      return next();
    } catch (error) {
      return next(new Error("Authentication failed"));
    }
  });

  // Connection
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add authenticated admins to the admins room
    if (socket.data.user?.role === "admin") {
      socket.join("admins");
      console.log("Admin joined the room");
    }

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });

  return io;
};
