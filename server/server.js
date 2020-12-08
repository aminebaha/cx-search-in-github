const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const apiRoute = require('./apiLogin.js')


function run(){
const app = express()
app.use(cors())
app.use('/',apiRoute)
const port =8000 //|| parseInt(process.env.PORT);// VERIFIER SI C'EST UN NOMBRE

app.listen(port,()=> {console.log('listen port '+port);})
}
//CSS
//app.use(express.static('public'))

run()
   