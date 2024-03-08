import prisma from './db.js'
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
export {
    findUser
}