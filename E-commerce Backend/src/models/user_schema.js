import mongoose from "mongoose";
import AuthRole from "../utils/authRoles.js";
import bcrypt from "bcryptjs"
import  Jwt  from "jsonwebtoken";
import config from "../config/index.js";
import crypto from "crypto"

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
{timestamps: true}
)

// Encyption the password before saving

userSchema.pre("save" , async function(next){
       if(!this.isModified("password")) return next()
       this.password = await bcrypt.hash(this.password, 10)
       next()
})

userSchema.method = {
  //compare password
  comparePassword: async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
  },
// genterate the token

getJwttoken: function(){
   Jwt.sign({_id: this._id}, config.JWT_SECRET,{
    expiresIn: config.JWT_EXPIRY
   })
},

// genterate forget password token

generateForgetPasswordToken: function (){

  const forgotToken= crypto.createHash("sha256").update(forgotToken).digest("hex")

   // time for token to expire

   this.forgetPasswordexpiry = Date.now() + 20 * 60 * 1000
   return forgotToken
}

}

export default mongoose.model("User", userSchema)

