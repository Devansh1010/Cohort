import { Router } from "express";
import { registerUser } from '../controllers/Auth.controller.js'
import { validate } from '../middleware/validator.middleware.js'
import { userRegistrationValidator } from '../utils/validators/index.js'

const router = Router()

router.route('/register').post(userRegistrationValidator(), validate,  registerUser)

export default router