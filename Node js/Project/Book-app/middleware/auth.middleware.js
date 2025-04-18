import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function authMiddleWare(req, res, next) {
  let authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];


  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Token not found, please login" });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_TOKEN_KEY);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
}

export { authMiddleWare };
