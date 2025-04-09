import jwt from "jsonwebtoken";

async function authMiddleWare(req, res, next) {
  try {
    let token = req.cookies.token;
    if (!token) {
      throw new Error("Token not valid");
    }

    let { name, role } = await jwt.verify(token, "Ayan@12345");

    if (role !== "admin") {
      throw new Error("This is not an admin user");
    }

    req.name = name;
    next();
  } catch (error) {
    res.status(400).json({ message: "Bad request", error: error.message });
  }
}


function authHeaderToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader);

  const token = authHeader && authHeader.split(" ")[1];
  console.log("Extracted Token:", token);

  if (!token) {
    return res.status(401).json({ message: "Token missing or malformed" });
  }

  try {
    const decoded = jwt.verify(token, "Ayan@12345");
    console.log("Decoded:", decoded);
    req.user = decoded;
    next(); 
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}




export  {authMiddleWare,authHeaderToken}
