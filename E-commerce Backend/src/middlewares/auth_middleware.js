import User from "../models/user_schema";
import JWT from "jsonwebtoken"
import asyncHandler from "../service/asyncHandler";

import config from "../config";
import CustomError from "../utils/customError";

export const isLoggedIn = asyncHandler(async (req, res, next) => {
    let token;
    if(req.cookies.token || (req.headers.authorization && req.headers.authorization.startWith("Bearer")))
    {
        token= req.cookies.token || req.headers.authorization.split(" ")[1]
    }
    if(!token){
        throw new CustomError("Not authorised to access this resource", 401)
    }
   
    try{
          const decodejwtPayload = JWT.verify(token, config.JWT_SECRET)
          req.user = await User.findById(decodejwtPayload._id, "name email role")
          next()
    }
     catch (error) {
        throw new CustomError("Not authorized to access this resource ", 401)
    }
})

export const authorize = (...requiredRole) => asyncHandler( async (req, res, next) => {
          
    if(!requiredRole.includes(req.user.role)) {
      throw new CustomError("You are not authorized to acces this resource ")
    }

    next()


})