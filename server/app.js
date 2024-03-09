import express from 'express'
import 'dotenv/config'
import prisma from './db/db.js'
import userRouter from './Controllers/user.js'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.get('/' , async (req , res) => {
    res.json({
        message:"Hello And Welcome"
    })
})
app.use('/find' , userRouter)
const port = process.env.PORT || 8000
app.listen(port , () => console.log("server is running on port no :" , port))