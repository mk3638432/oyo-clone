import connectDb from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method == "POST") {
    connectDb();
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const emailExist = await User.findOne({ email });
    if (!emailExist) {
      return res.status(400).json({ message: "Please  Register first" });
    }
    const passwordMatch = await bcrypt.compare(password, emailExist.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Password does not match" });
    }
    const token = jwt.sign({ token: emailExist._id }, "manojJwt", {
      expiresIn: "30d",
    });
    res.status(200).json({ msg: "Loggied In Successfully", token: token });
  }
}
