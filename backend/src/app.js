const express = require('express')
const cors = require('cors')
const app = express()
const UserRoutes = require('./routes/userRoutes')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use("/auth",UserRoutes)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log('api rodando na porta',PORT)
})

require('./database/connection')