//import Mongoose
const mongoose = require('mongoose')
//set up mongoose connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/hunters',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)
let db = mongoose.connection

//set up console loogds
db.once('open', () => {
    console.log(`Connected to the Bounties server`)
})
db.on('error', err => {
    console.log(`db error`)
    console.error(err)
})

module.exports.Bounty = require('./bounties')