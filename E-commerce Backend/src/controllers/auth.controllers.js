import User from "../models/user_schema";
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";

// signup user

export const signUp= asyncHandler(async(req, res) => {
    //get data from user
    const {name, email, password} = req.body

    // validaton
    if(!name || !email || !password){
       
        throw new CustomError("Please add all fields", 400)
        // throw new error ("Got an error ")- we are using custom error
    }

    // lets Add the data to database

    // check if user already exists
    const existingUser = await User.findOne({email})

    if(existingUser){
        throw new CustomError("User already exist", 400)
    }

    const user= await User.create({
        name,
        email,
        password
    })

    const token = user.getJwttoken()

    //safety
    user.password =undefined

    // store this token in user's account
       
    res.cookie("token", token)
    // send back a response to user
    res.status(200).json({
        success: true,
        token,
        user
    })



})