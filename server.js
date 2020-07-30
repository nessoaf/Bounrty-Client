//Import
require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')
const mongoose = require('mongoose')

//middleware

app.use(cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200
}))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//ROUTES

app.get('/', (req, res) => {
    res.send("These are not the droids you're looking for! Nothing to see here, Move along")
})
app.use('/v1/bounties', require('./routes/v1/bounties'))

//todo delete test route
// app.get('/test', (req, res) => {
//     db.Bounty.find()
//         .then(bounties => res.send(bounties)).catch(err => { console.error(err)
//             res.send({ message:'server error'}) })
// })


//Listen
app.listen(process.env.PORT || 3000, console.log(`Jedi or Sith? ${process.env.PORT || 3000}`))