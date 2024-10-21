import { Router} from "express";
import express from 'express'
import { getAllUsers } from "../controller/controllers";


const router = Router()

router.get('/User',getAllUsers)



