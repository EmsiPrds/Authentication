import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import initDB from "./db/db.connect";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import authRoute from "./routes/auth/auth.route";
// import dashboardRoute from "@/routes/dashboard/dashboard.route";

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = process.env.FRONTEND_URLS
  ? JSON.parse(process.env.FRONTEND_URLS)
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"), false);
      }
    },
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).send("API is running");
});
app.use("/api/auth", authRoute);
//   app.use("/api/dashboard", dashboardRoute);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  initDB();
  console.log(`Server Running on port ${PORT}`);
});
