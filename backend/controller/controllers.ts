import { PrismaClient } from '@prisma/client'
import { User } from '@prisma/client'
import express from 'express'


const prisma = new PrismaClient()


export const getAllUsers = async (req:any, res:any) => {
    try {
        const users = await prisma.user.findMany({
            select:{
                name:true,
                email:true,
            }
          })
        res.status(200).json({ data:users});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
    }
} 

