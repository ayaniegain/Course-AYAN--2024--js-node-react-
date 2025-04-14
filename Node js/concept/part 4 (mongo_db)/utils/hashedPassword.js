import bcrypt from "bcrypt";
const saltRounds = 10;

async function hashedPassword(myPlaintextPassword) {
  try {
    let salt = await bcrypt.genSalt(saltRounds);
    let hashtext = await bcrypt.hash(myPlaintextPassword, salt);
    return hashtext;
  } catch (error) {
    console.error("Hashing failed:", error);
    throw error;
  }
}

export { hashedPassword };
