import express from 'express'
import { findUser } from '../db/user.js'

const router = express.Router()

router.get('/user' , findUser)
export default router