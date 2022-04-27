import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import mongoose from "mongoose";
import blogRouter from "./services/blogRoute.js";

const app = express();
let port = process.env.port
const dbURl = process.env.url

/* ---------------------------------------- middle wares--------------------------------------- */

app.use(cors()) /* remember to call the cors() and express.json() */
app.use(express.json())

/* -----------------------------------------endpoints-------------------------------------------- */
app.use("/blogs", blogRouter)
/* ----------------------------------------error handlers------------------------------------------ */

/* connect db  */ /* sdewdejd */

mongoose.connect(
  dbURl
);

mongoose.connection.on("connected", () => {
  app.listen(port, () => {
    console.log("listening on 3000");
    console.table(listEndpoints(app))
  });
});
