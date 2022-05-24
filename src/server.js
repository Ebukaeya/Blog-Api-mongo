import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import mongoose from "mongoose";
import blogRouter from "./services/blogRoute.js";
import User from "../src/Db/user.js";
import { basicAuth } from "./auth/blog.js";

const app = express();
let port = process.env.port;
const dbURl = process.env.url;

/* ---------------------------------------- middle wares--------------------------------------- */

app.use(cors()); /* remember to call the cors() and express.json() */
app.use(express.json());

/* -----------------------------------------endpoints-------------------------------------------- */
app.use("/blogs", basicAuth, blogRouter);
/* ----------------------------------------error handlers------------------------------------------ */

/* connect db  */ /* sdewdejd */

/* user routes */

app.post("/user", async (req, res, next) => {
  const newUser = await new User(req.body);
  const user = await newUser.save();

  res.send(user);
});
app.get("/user", async (req, res, next) => {
  const users = await User.find();

  res.send(users);
});

mongoose.connect(dbURl);

mongoose.connection.on("connected", () => {
  app.listen(port, () => {
    console.log("listening on 3000");
    console.table(listEndpoints(app));
  });
});


