import * as dotenv from "dotenv";
import { Server } from "socket.io";
import mongoose from "mongoose";
import express from "express";
import handlerErrors from "./src/middlewares/handlerErrors.js";
import authRouter from "./src/routes/auth.routes.js";
import ROUTES from "./src/constants/routes.js";
import cors from "cors";
import orderNoteRouter from "./src/routes/orderNotes.routes.js";
import saleNoteRouter from "./src/routes/saleNote.routes.js";
import statsRouter from "./src/routes/stats.routes.js";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

dotenv.config();
app.get("/", (req, res) => {
  res.send("hola");
});

app.use(cors());
app.use(express.json());
app.use(ROUTES.auth, authRouter);
app.use("/api", orderNoteRouter);
app.use("/api", saleNoteRouter);
app.use("/api", statsRouter);
app.use(handlerErrors);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.TEST_MONGO_DB_URI)
  .then(() => {
    console.log("Database connected ");
    server.listen(process.env.PORT || 3000, () => {
      console.log("server running");
      io.on("connection", (socket) => {
        console.log("User connected " + socket.id);
        socket.on("newOrderSeller", () => {
          io.emit("newOrder", {});
          console.log("newOrder");
        });
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });
