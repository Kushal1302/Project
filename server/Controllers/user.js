import express from 'express'
import { findUser, loginUser } from '../db/user.js'

const router = express.Router()

router.get('/user' , findUser)
router.post('/login' , loginUser)
export default router