const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.json({message: 'Hello Cypress Discovery'})
})
 
app.listen(3000)