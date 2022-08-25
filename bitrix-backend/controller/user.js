const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config();

const UserModel = require("../models/User.model");

userRouter.post("/signup", async (req, res)=>{
    const {username, email, password} = req.body;
    const previous_user = await UserModel.find({email})
    if(previous_user.length !== 0){
        return res.send("User Already Exist, Please login")
    }
    await bcrypt.hash(password, 4, (err, hash_password)=>{
        if(err){
            return res.send("Signup failed, Please try again")
        }
        const new_user = new UserModel({
            username : username,
            email : email,
            password : hash_password
        })
        new_user.save();
        res.send("Signup Successful")
    }) 
})

userRouter.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    const search_user = await UserModel.findOne({email});
    const hashed_password = search_user.password;
    await bcrypt.compare(password, hashed_password, (err, result)=>{
        if(err){
            return res.send("Login Failed, please try again")
        }
        if(result){
            const token = jwt.sign({email : search_user.email, username : search_user.username, _id: search_user._id}, process.env.SECRET_KEY)
            if(search_user.length === 0){
                return res.send("Invalid Credential")
            }
            res.send({"message":"Login Successful", "token": token})
        }
        else{
            return res.send("Invalid Credential")
        }
    })
})

module.exports = userRouter;