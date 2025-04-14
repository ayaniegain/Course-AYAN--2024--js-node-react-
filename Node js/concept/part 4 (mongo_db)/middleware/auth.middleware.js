import jwt from "jsonwebtoken";

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send("Invalid token");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRECT);

    req.data = decoded;

    next();
  } catch (error) {
    console.error("JWT Error:", error.message);
    res.status(401).send("Unauthorized");
  }
};

export { isLoggedIn };
