const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')

const app = express()

const dotenv = require('dotenv').config()

//const {DATABASE_HOST:host,DATABASE_PORT:port,DATABASE_USER:user,DATABASE_PASS:pass,DATABASE_NAME:name} = process.env
const knex = require('knex')({
    client: 'pg',
    version: '7.2', //RECUPERER DU FICHIER ENV
    connection: {
      host : process.env.HOST, // faire host,port,user ...
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE ,
      charset : process.env.CHARSET
    }
  });

knex.schema.hasTable('user').then((exists)=>{ 
if(!exists){
  return knex.schema.createTable('user',(table)=>{
     table.string('login')  
     table.increments('id').primary()
     table.string('node_id')
     table.string('avatar_url')
     table.string('gravatar_id')
     table.string('url')
     table.string('html_url')
     table.string('followers_url')
     table.string('following_url')
     table.string('gists_url')
     table.string('starred_url')
     table.string('subscriptions_url')
     table.string('organizations_url')
     table.string('repos_url')
     table.string('events_url')
     table.string('received_events_url')
     table.string('type')
     table.boolean('site_admin')
  
})
}
})

 
insertUsers()
async function insertUsers(){
fetch("https://api.github.com/users")
.then(response=>response.json())
.then((data)=>{
  for(const [key,value] of Object.entries(data)){
    knex('user').insert
    ({
      login: JSON.stringify(value.login).toString(),
      node_id: JSON.stringify(value.node_id).toString(),
      avatar_url: JSON.stringify(value.avatar_url).toString(),
      gravatar_id: JSON.stringify(value.gravatar_id).toString(),
      url: JSON.stringify(value.url).toString(),
      html_url: JSON.stringify(value.html_url).toString(),
      followers_url: JSON.stringify(value.followers_url).toString(),
      following_url: JSON.stringify(value.following_url).toString(),
      gists_url: JSON.stringify(value.gists_url).toString(),
      starred_url: JSON.stringify(value.starred_url).toString(),
      subscriptions_url: JSON.stringify(value.subscriptions_url).toString(),
      organizations_url: JSON.stringify(value.organizations_url).toString(),
      repos_url: JSON.stringify(value.repos_url).toString(),
      events_url: JSON.stringify(value.events_url).toString(),
      received_events_url: JSON.stringify(value.received_events_url).toString(),
      type: JSON.stringify(value.type).toString(),
      site_admin: JSON.stringify(value.site_admin).toString()
    })
.then(()=>{
    console.log("user insertion")
  }).catch(() =>{});
  }
})
}



