import bcrypt from "bcrypt";

async function hashedPassword(password) {
  try {
    const saltRounds = 10;
    let encPasword = await bcrypt.hash(password, saltRounds);
    return encPasword;
  } catch (error) {
    console.error("Error hashing password:", error);
  }
}

async function comparePassword(plainPassword, hashedPassword) {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error("Error while comparing password:", error);
  }
}
export { hashedPassword, comparePassword };
