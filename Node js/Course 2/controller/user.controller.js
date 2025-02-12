import { user } from "../models/user.model.js";

let getAllUser = async (req, res) => {
  let alluser = await user.find();

  res.send(alluser);
};

let createUser = async (req, res) => {
  let createUser = new user(req.body);

  const saveUser = await createUser.save();

  res.status(200).json(saveUser);
};

export { getAllUser, createUser };
