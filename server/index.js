require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
app.use(express.json())
const {SERVER_PORT, CONNECTION_STRING} = process.env
const controller = require('./controller')

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log(`database set!`)
    app.listen(SERVER_PORT, () => console.log(`Nothing is screwing up your sleep on port: 😴  ${SERVER_PORT} 😴` ))
})

// Endpoints here
app.get('/api/properties', controller.properties)
app.post('/api/addProperty', controller.addProperty)