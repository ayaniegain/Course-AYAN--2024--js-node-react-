import jwt from "jsonwebtoken";
import { user } from "../models/auth.model.js";
import { comparePassword, hashedPassword } from "../utils/passwordHashed.js";

async function registerUser(req, res) {
  const { username, password, email, role } = req.body;

  let hashpassword = await hashedPassword(password);

  try {
    let existUser = await user.findOne({
      $or: [{ email }, { username }],
    });

    if (!existUser) {
      const newUser = new user({ ...req.body, password: hashpassword });
      const saveUser = await newUser.save();

      res
        .status(201)
        .json({ message: "user  register successfully", data: saveUser });
    } else {
      res.status(400).json({ message: "user Already register" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error register user", error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    let { username, email, password } = req.body;

    let loginUser = await user.findOne({
      $or: [{ email }, { username }],
    });

    if (!loginUser || loginUser.length == 0) {
      return res.status(400).json({ message: "user not found" });
    }
    let isMatchPassword = await comparePassword(password, loginUser.password);

    if (!isMatchPassword) {
      return res.status(400).json({ message: "password not matching" });
    }

    var token = jwt.sign(
      {
        id: loginUser._id,
        username: loginUser.username,
        email: loginUser.email,
        role: loginUser.role,
      },
      process.env.JWT_TOKEN_KEY,
      { expiresIn: "1h" }
    );

    res.setHeader('Authorization', `Bearer ${token}`);

    res
      .status(201)
      .json({ message: "user fetch successfully", accessToken: token });
  } catch (error) {
    res.status(500).json({ message: "Error login user", error: error.message });
  }
}

export { registerUser, loginUser };
