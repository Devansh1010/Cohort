class ApiResponse {
    constructor(statusCode, message= "Success", data){
        this.data = data
        this.statusCode = statusCode < 400
        this.message = message
        this.success = statusCode < 400
    }
}

export {ApiResponse}