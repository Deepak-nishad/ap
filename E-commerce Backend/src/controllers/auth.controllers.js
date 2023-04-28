import User from "../models/user_schema";
import asyncHandler from "../service/asyncHandler";
import CustomError from "../utils/customError";


/******************************************************
 * @SIGNUP
 * @route http://localhost:5000/api/auth/signup
 * @description User signUp Controller for creating new user
 * @returns User Object
 ******************************************************/

export const cookieOption ={
    expires: new Date(Date.now() + 3*24*60*60*1000),
    httpOnly: true
}

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
       
    res.cookie("token", token, cookieOption)
    // send back a response to user
    res.status(200).json({
        success: true,
        token,
        user
    })



})

//  for login
export const login= asyncHandler(async(req, res) => {
const {email, password}= req.body

// validation
if(!email || !password){
    throw new CustomError("Please fill all the details, 400")
}

const user = User.findOne({email}).select("+password")

if(!user){
    throw new CustomError("Invalid credential" , 400)
}

const isPasswordMatched = await user.comparePassword(password)

if(isPasswordMatched){
    const token = user.getJwttoken()
    user.password = undefined
    res.cookie("token",token,cookieOption)
    return res.status(200).json({
        success:true,
        token,
        user
    })
}
})

// logout
export const logout= asyncHandler(async (req, res) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'logged Out'
    })

})

// get profile
export const getProfile = asyncHandler(async (req, res) => {
    const {user} = req.body

    if(!user) {
        throw new CustomError("User not found ", 401)
    }

    res.status(200).json({
        success: true,
        user
    })
})

