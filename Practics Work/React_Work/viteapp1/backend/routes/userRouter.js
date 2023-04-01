import express from "express";
import { getUsers } from "../controllers/userController.js";
const userRouter = express.Router();
    
userRouter.get("/users", getUsers);     //read
// userRouter.post("/user", upload.single('image'), createUser);   //create
// userRouter.put("/user/:id", upload.single('image'), updateUser);   //update
// userRouter.delete("/user/:id", deleteUser);   //delete



export default userRouter;