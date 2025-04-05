import bcrypt from "bcrypt";
const saltRounds = 10;



async function hashPassword(plainPasssword) {
  let salt = await bcrypt.genSalt(Number(saltRounds));
   return  await bcrypt.hash(plainPasssword, salt);

  
}

async function comparePassword(plainPasssword,hash) {


  let result=  await bcrypt.compare(plainPasssword,hash);

  console.log("result",result)

  return result
 

}

export { hashPassword, comparePassword };
