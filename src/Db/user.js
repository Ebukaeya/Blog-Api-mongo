import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { required: true, type: String },
  password: { required: true, type: String },
});

userSchema.pre("save", async function (next) {
  let userPassword = this.password;
  this.password = await bcrypt.hash(userPassword, 10);

  next();
});

userSchema.methods.toJSON = function () {
  // this toJSON method is called EVERY TIME express does a res.send(user/s)

  const userDocument = this;
  const userObject = userDocument.toObject();

  delete userObject.password;
  delete userObject.__v;

  return userObject;
};

export default model("User", userSchema);
