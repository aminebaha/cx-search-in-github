const express = require('express')
const cors = require('cors')
const router = express.Router()

  const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'searchGithub'
    }
  })

router.get('/users', (req,res)=>{
 // const username = req.params.username
  knex.select().from("user").orderBy('login').then((response)=>{
  res.send(response)
})
  })
  router.get('/users/:username', (req,res)=>{
     const username = req.params.username
     knex.select().from("user").where('login',username).orderBy('login').then((response)=>{
     res.send(response)
   })
     })

module.exports = router;