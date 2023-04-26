import  express  from "express";

import  cors from "cors";

import cookieParser from "cokkie-parser"

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())
app.use()

export default app;
