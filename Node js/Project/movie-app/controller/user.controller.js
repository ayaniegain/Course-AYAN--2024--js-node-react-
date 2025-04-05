import USER from "../model/user.model.js";
import jwt from "jsonwebtoken";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

import { hashPassword, comparePassword } from "../utils/passwordEnC.js";

async function userRegister(req, res) {
  const { name, username, email, password } = req.body;

  let validUser = await USER.findOne({ email });

  if (validUser) {
    console.log("user Already exist");
    return res.status(404).json({ message: "user Already exist" });
  }

  let hashedPassword = await hashPassword(password);

  try {
    if (req.body) {
      let user = new USER({ name, username, email, password: hashedPassword });
      console.log(user);
      await user.save();
      res.status(202).send("user created  Details");
    } else {
      res.status(404).send("invalid user Details");
    }
  } catch (error) {
    res.status(404).send(`${error}`);
  }
}

async function userLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Find user in the database
    let validUser = await USER.findOne({ email });

    if (!validUser) {
      console.log("No user found");
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    let match = await comparePassword(password, validUser.password);

    if (match) {
      var token = jwt.sign({ email: validUser.email }, process.env.JWT_SECRET);

      res.cookie("token",token)

     

      // var decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);

      console.log("User login successful");
      return res.status(200).json({ message: "Login successful" });
    } else {
      console.log("Incorrect password");
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllUsers(req, res) {
  // console.log(req.cookies);

  const searchUser = await USER.find();

  try {
    if (searchUser) {
      return res.status(200).json({
        success: true,
        count: searchUser.length,
        data: searchUser,
      });
    }
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching users",
    });
  }
}

async function getUser(req, res) {
  // res.cookie("name", "700125");

  // console.log(req.cookies);

  let { id } = req.params;

  let singleUser = await USER.findById({ _id: id });

  res.status(200).json(singleUser);
}

async function deleteUser(req, res) {
  let { id } = req.params;

  let singleUser = await USER.deleteOne({ _id: id });

  res.status(200).json(singleUser);
}

function updateUser(req, res) {}

export {
  userRegister,
  userLogin,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
};
