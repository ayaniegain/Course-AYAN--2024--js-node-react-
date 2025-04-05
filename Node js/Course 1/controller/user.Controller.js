
let user = require("../view/dummy.user.json");
let { users } = user;

const createUser = (req, res) => {
  let adduser = req.body;

  users.push(adduser);

  console.log(users);
  res.status(200).send(users);
};


const getAllUser=(req,res)=>{

    res.status(200).send(users)

}


const readUserData = (req, res) => {
  let userId = +req.params["id"];

  let user = users.find((prod) => prod.id == userId);

  console.log(user);
  res.send(user);
};

const updateUser=(req, res) => {
    let userId = +req.params["id"];
  
    if (userId) {
        
        let index = users.findIndex((item) => item.id == userId);
        
          users[index]={...users[index],...req.body}
    }
  
    res.send(users);
  }

  const deleteUser=(req, res) => {
    let userId = +req.params["id"];
  
    if (userId) {
        
     index=  users.findIndex((item) => item.id != userId);

      users=users.splice(index,1)
        
    res.send(users);
    }
  
  }

  module.exports={createUser,getAllUser,readUserData,updateUser,deleteUser}