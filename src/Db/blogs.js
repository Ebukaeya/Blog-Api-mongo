import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogsSchema = new Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    cover: { type: String, required: true }, /* image url */
    readTime: {
      value: { type: Number, required: true },
      unit: String,
    },
    author: {
      name: { type: String, required: true },
      avartar: { type: String, required: true },
    },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const BlogModel = model("Blog", blogsSchema)


export default BlogModel