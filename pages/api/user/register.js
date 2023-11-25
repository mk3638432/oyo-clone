// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDb();
    const { name, email, password } = req.body;
    // if (!nama || !email || !password) {
    //   return res.status(404).json({ message: "All  fields required" });
    // }
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(404).json({ message: "Email is Already registered " });
    }
    const hasspasswprd = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hasspasswprd,
    });
    const result = await newUser.save();
    const token = jwt.sign(
      {
        token: result._id,
      },
      "manojJwt",
      { expiresIn: "30d" }
    );
    return res
      .status(201)
      .json({ message: "Register Succesfully", token, user: result });
  }
}
