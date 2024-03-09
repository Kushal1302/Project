import prisma from './db.js'
import  Jwt  from 'jsonwebtoken'
const findUser = async (req ,res) => {
    try {
        const user = await prisma.user.findUnique({
            where:{
                id:"65eaec10aff22dcc7e12dc2b"
            },
            include:{
                student:{
                    select:{
                        class:true,
                        age:true,
                        Address:true
                    }
                }
            }
        })
       return res.json({
        data:user
       })
    } catch (error) {
        console.log(error)
    }
}
const loginUser = async (req ,res) => {
    try {
        const {email , password} = req.body
        const user = await prisma.user.findUnique({
            where:{
                email:email,
                password:password
            }
        })
        if(user){
            const token = Jwt.sign(user , "secretKey")
            return res.json({
                token:token,
                message:"Login Successfull",
            })
        }
        return res.json({
            message:"Login Failed"
        })
    } catch (error) {
        console.log(error.message)
    }
}
export {
    findUser,
    loginUser
}