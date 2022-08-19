const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')

require('dotenv').config()

app.use(bodyParser.json())

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME 
})

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected with App...');
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server started...')
})
