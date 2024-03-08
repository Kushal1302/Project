import express from 'express'
import 'dotenv/config'
import prisma from './db/db.js'
import userRouter from './Controllers/user.js'

const app = express()
app.get('/' , async (req , res) => {
    res.json({
        message:"Hello And Welcome"
    })
})
app.use('/find' , userRouter)
const port = process.env.PORT || 8000
app.listen(port , () => console.log("server is running on port no :" , port))