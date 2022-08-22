const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config()

const corsOptions = { origin: "http://localhost:8081" }
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))


const db = require("./server/models")
db.sequelize.sync()

// routes
require('./server/routes/auth.routes')(app)
require('./server/routes/user.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
