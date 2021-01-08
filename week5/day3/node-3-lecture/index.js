require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db);
    console.log("Successful connection to database, m'lord")
})

app.get('/api/doggos', ctrl.getDoggos)


app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`))