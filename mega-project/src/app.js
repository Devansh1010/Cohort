import express from "express"

// ? Router Imports
import {} from './routes/HealthCheck.route.js'
import { healthCheck } from "./controllers/HealthCheck.controller.js"
const app = express()

app.use('/api/v1/healthcheck', healthCheck)
app.use('/api/v1/auth', auth)

export default app