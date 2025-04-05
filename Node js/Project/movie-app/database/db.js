import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.MONGO_URI)

async function CREATE_CONNECTION() {
  try {
    let conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
      console.log("Connection Successfull....");
    } else {
      console.log("not connected..");
    }
  } catch (error) {
    console.log(`connection error ${error}`);
  }
}

export { CREATE_CONNECTION };
