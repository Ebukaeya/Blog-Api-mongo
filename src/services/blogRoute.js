import express from "express";
import BlogModel from "../Db/blogs.js";

const blogRouter = express.Router();

blogRouter.post("/", async (req, res, next) => {
  try {
    let newBlog = await new BlogModel(req.body);
    newBlog.save().then(() => {
      console.log("record saved");
    });
    res.send(newBlog);
  } catch (error) {
    console.log(error);
  }
});

blogRouter.get("/:id", async (req, res, next) => {
  try {
    let blogs = await BlogModel.findById(req.params.id, { author: 1 });

    res.send(blogs);
  } catch (error) {}
});

blogRouter.get("/", async (req, res, next) => {
  try {
    let blogs = await BlogModel.find();

    res.send(blogs);
  } catch (error) {}
});

blogRouter.put("/:id", async (req, res, next) => {
  try {
      let blogToUpdate = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {new:true})

     res.send(blogToUpdate)
  } catch (error) {
      console.log(error);
  }
});
blogRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {}
});

export default blogRouter;
