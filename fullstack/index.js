import express from "express"
import 'dotenv/config'
import cors from "cors"
import dbConnect from "./utils/dbConnect.js"
import userRoutes from './routes/user.route.js'

const app = express()
const port = process.env.PORT || 8080

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true})) // handle urls like http://devansh%20prajapati how to deal with %20 i want devnash "space" prajapati
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Connect to DB
dbConnect()

console.log(process.env)

app.use('/api/v1/user/', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


