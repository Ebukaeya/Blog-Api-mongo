import atob from "atob";
import User from "../Db/user.js";
import bcrypt from "bcrypt";

export const basicAuth = async (req, res, next) => {
  if (req.headers.authorization) {
    const auth = req.headers.authorization.split(" ")[1];
    const [email, password] = atob(auth).split(":");

    const user = await User.findOne({ email });
    if (user) {
      console.log(user.password, password);
      let isAuthorized = await bcrypt.compare(password, user.password);
      if (isAuthorized) {
        req.user = user;
        next();
      } else {
        res.send("you are not authorized");
      }
    } else {
      res.send("u must be a user");
    }
  } else {
    res.send("kn");
  }
};
