import bcrypt from "bcrypt";
import { userModel } from "../models/user.model.js";
import { hashedPassword } from "../utils/hashedPassword.js";
import jwt from "jsonwebtoken";

let createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let hash = await hashedPassword(password);

    let user = new userModel({ name, email, password: hash });

    await user.save();

    res.status(201).send("user Created succefully");
  } catch {
    res.status(500).send("Internal server error");
  }
};

let loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email: email });

    if (!user) res.status(400).send("user not found");

    let passwordEnc = await bcrypt.compare(password, user.password);

    if (user.email === email && passwordEnc) {
      let token = jwt.sign(
        {
          user: { id: user._id, email: user.email, name: user.name },
        },
        process.env.JWT_SECRECT,
        { expiresIn: 60 * 60 }
      );

      res.cookie("token", token);
      res.status(201).send("user login succefully");
    } else {
      res.status(401).send("user not loggedin");
    }
  } catch {
    res.status(500).send("Internal server error");
  }
};

let logoutUser = async (req, res) => {
  await res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
};

export { createUser, loginUser, logoutUser };
