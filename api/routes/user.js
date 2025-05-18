import { Router } from "express"
import { UserController } from "../controllers/user.js"
import { checkUserSession } from '../midelwares/userSession.js'

export const userRouter = Router()

userRouter.post('/', UserController.login)
userRouter.get('/', checkUserSession , UserController.checkLogin)