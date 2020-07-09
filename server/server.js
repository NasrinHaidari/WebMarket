const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// make a default middleware to check our application work
app.get('/', (req, res) => {
    res.json('Hello from Nasrin')
})


app.listen(3000, err => {
    console.log('Listening on port ', 3000)
})