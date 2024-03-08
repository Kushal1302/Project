import express from 'express'
import 'dotenv/config'
import prisma from './db/db.js'
import userRouter from './Controllers/user.js'

const app = express()
app.get('/' , async (req , res) => {
    try {
        const users = await prisma.user.create({
            data:{
                email:"Kushalmalviya1302@gmail.com",
                name:"Kushal Kumar"
            }
        })
        return res.json({
            message:"done",
            data:users
        })
    } catch (error) {
        return res.json({
            message:error.message
        })
    }
})
app.use('/find' , userRouter)
const port = process.env.PORT || 8000
app.listen(port , () => console.log("server is running on port no :" , port))