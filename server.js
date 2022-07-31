const express = require('express')
const cors = require('cors')
require("dotenv").config();
const app = express()
const PORT = process.env.PORT || 3000
const corsOptions = {
    origin: process.env.ORIGIN
}

// MIDDLEWARE
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES
app.get('/', (req, res) => {
    res.send({
        'msg': 'Use postman to consume the api'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://127.0.0.1:${PORT}`)
})