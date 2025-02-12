import mongoose from "mongoose";
let mongo_url =
  "mongodb+srv://ayaniegain:bookayaniegain@cluster0.ag2r4.mongodb.net/";
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const user = new mongoose.Schema(
  { name: String, email: String, password: String },
  { timestamps: true }
);

const USER = mongoose.model("USER", user);

async function createUser() {
  const newuser = new USER({
    name: "Ayan",
    email: "Ayan@gmail.com",
    password: "12345",
  });
  await newuser.save();
}
// createUser();

async function getAllUser() {

  // let getUser=await USER.find({},{email})
  let getUser=await USER.findByIdAndUpdate("67ac64af9d990ba8d336812f",{email:"ayan2@gmail.com"})
  // let getUserById=await USER.findById({_id:"67ac64af9d990ba8d336812f"})

  console.log(getUser)
  // console.log(getUserById)
  
}
getAllUser()
