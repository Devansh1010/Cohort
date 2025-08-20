import { validationResult } from 'express-validator'
import { ApiError } from '../utils/ApiErros.js'


export const validate = (req, res, next) => {
    const errors = validationResult(req)

    console.log("Validate Errors: " , errors);

    if (errors.isEmpty()) return next();

    const extractedErrors = []

    errors.array().map((e) => extractedErrors.push({
        [e.path]: e.msg
    }))

    throw new ApiError(405, "Received Data is not valid", extractedErrors)
} 