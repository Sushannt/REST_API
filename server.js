import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import router from "./Routes/router.js";

const app = express();
const PORT = process.env.PORT;

//Database connection
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error.message)).once("open", () =>
  console.log("database connected 👌")
);

//middleware
app.use(express.json());
app.use("/api/articles", router);

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
