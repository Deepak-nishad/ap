import {getProfile, login, logout, signUp} from "../controllers/auth.controllers";
import { isLoggedIn } from "../middlewares/auth_middleware";
import { Router } from "express";

// import router from "./index.js"

const router = Router()

router.post("/signup", signUp)
router.post("/login", login)
router.get("/logout", logout)

router.get("/profile", isLoggedIn, getProfile)

export default router;
