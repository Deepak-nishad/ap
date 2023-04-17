import mongoose from "mongoose";
import AuthRole from "../utils/authRoles.js";
const userSchema = new mongoose.Schema(
    {
    
       name: {
        type: String,
        required: ["true", "Name is required"],
        maxLength: [50,"Name must be less than 50 chars"]
       },
       email: {
        type: String,
        required: ["true","Email is required "],
       },
       password: {
         type: String,
         required: [true, "Password is required "],
         minLength : [5,"Password must be at least 8 chars"],
         select: false
       },
       role: {
        type: String,
        enum: Object.values(AuthRole),
        default: AuthRole.USER
       },
       forgetPasswordToken: String,
       forgetPasswordexpiry: Date
    },
{}
)

export default mongoose.model("User", userSchema)

