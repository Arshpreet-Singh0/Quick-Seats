import express from "express";
import { UserModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();
const secret = process.env.SECRET_KEY;

export const signUp = async (req,res) => {
  try {
    
    const { username, email, password } = req.body;
    console.log(username, email, password);
    

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    

    if (user) {
      return res.status(400).json({
        message: "User already exists with this email",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }

    let user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    

    const isPassMatched = await bcrypt.compare(password, user.password);

    if (!isPassMatched) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    const token = jwt.sign(tokenData, secret, {
      expiresIn: "1d",
    });

    user = {
      user_id : user._id,
      username : user.username,
      email : user.email
    }

    return res.status(200).cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "None", // Allows cross-origin cookies
      secure: true,
    })
    .json({
        message : `Welcome back ${user.username}`,
        user,
        success : true,
    })
  } catch (error) {
    console.log(error);
  }
};

export const logout = async(req, res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge : 0})
        .json({
            message : "Logout Successfully",
            success : true,
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const updatePassword = async(req, res)=>{
  try {
    const {email, password} = req.body;

  const user = await UserModel.findOne({email});

  const isPassMatched = await bcrypt.compare(password, user.password);

    if (!isPassMatched) {
      return res.status(400).json({
        message: "Incorrect Password",
        success: false,
      });
    }

    const {newpassword} = req.body;

    if(!newpassword){
      return res.status(400).json({
        message: "Please Enter new Password to update",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);

    user.password = hashedPassword;
    const response = await user.save();


    return res.status(200).json({
      message: "Password Changed successfully",
      success: true,
    });



  } catch (error) {
    console.log(error);
  }
}