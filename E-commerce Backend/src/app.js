import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

import routes from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

app.use("/api/v1", routes)
// app.use("/", (_req, res) => {
//    res.send("Hello there deepak - API")
// })

export default app;

// http://localhost:5000/api/v1/auth/login
// http://localhost:5000/api/v1/auth/logout