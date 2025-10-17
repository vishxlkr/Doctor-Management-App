import validator from "validator";
import bcrypt, { genSalt } from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// api to register user
const registerUser = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
         return res.json({ success: false, message: "missing details" });
      }

      // validating email format
      if (!validator.isEmail(email)) {
         return res.json({ success: false, message: "Enter a valid email " });
      }

      // validating strong password
      if (password.length < 8) {
         return res.json({
            success: false,
            message: "Enter a strong password",
         });
      }

      // hashing user password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const userData = {
         name,
         email,
         password: hashedPassword,
      };

      const newUser = new userModel(userData);
      const user = await newUser.save();

      //_id -> token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
   }
};

// api for user login

const loginUser = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
         return res.json({ success: false, message: "User does not exist" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
         res.json({ success: true, token });
      } else {
         res.json({ success: false, message: "Invalid credentials" });
      }
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
   }
};

// get the user profile data
const getProfile = async (req, res) => {
   try {
      // const { userId } = req.body;
      const userId = req.user.id;
      const userData = await userModel.findById(userId).select("-password");
      if (!userData) {
         return res.json({ success: false, message: "User not found" });
      }
      res.json({ success: true, userData });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
   }
};

export { registerUser, loginUser, getProfile };
