import USER from "../model/user.model.js";

async function userRegister(req, res) {
  const { name, username, email, password, confirmpassword } = req.body;


  try {
    if (req.body) {
      let user = new USER({ name, username, email, password, confirmpassword });
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

function getAllUsers(req, res) {}

function getUser(req, res) {}

function deleteUser(req, res) {}

function updateUser(req, res) {}

export {
  userRegister,
  userLogin,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
};
