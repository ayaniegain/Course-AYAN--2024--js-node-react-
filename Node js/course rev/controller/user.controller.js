import USER from "../model/user.model.js";

async function userRegister(req, res) {
  const { name, username, email, password, confirmpassword } = req.body;
  try {
    if (req.body) {
      let user = new USER({ name, username, email, password, confirmpassword });
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

function userLogin(req, res) {}

async function getAllUsers(req, res) {
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
