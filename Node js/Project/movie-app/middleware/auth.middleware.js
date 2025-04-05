import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

let varifyUserLogin = (req, res, next) => {
  let token = req.cookies.token;

  if (!token) {
    res.status(401).send("User Not Authorized");
  }

  try {
    let decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

export default varifyUserLogin;
