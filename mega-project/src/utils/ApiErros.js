class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ''   // TODO: read about this
    ){
        super(message);
        this.statusCode = statusCode
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}