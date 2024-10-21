// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
  
//     const users = await prisma.user.findMany()
//     console.log(users)

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "XXXXXXXXXXXXX"
    //     }
    // })
    // console.log(user)

    // const newUser = await prisma.user.create({
    //     data: {
    //         name: "Test User",
    //         email: "XXXXXXXXXXXXX",
    //     }
    // })
    // console.log(newUser)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })


import  express  from "express";
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.listen( port ,()=>{
    console.log('server is running at port number '+ port)
});