//Import
const express = require('express')
const app = express()
const db = require('./models')

//middleware
const mongoose = require('mongoose')
app.use(express.urlencoded({ extended: false }))

//ROUTES

app.get('/', (req, res) => {
    res.send("These are not the droids you're looking for! Nothing to see here, Move along")
})


//todo delete test route
app.get('/test', (req, res) => {
    db.Bounty.find()
        .then(bounties => res.send(bounties)).catch(err => { console.error(err)
            res.send({ message:'server error'}) })
})


//Listen
app.listen(process.env.PORT || 3000, console.log(`Jedi or Sith? ${process.env.PORT || 3000}`))