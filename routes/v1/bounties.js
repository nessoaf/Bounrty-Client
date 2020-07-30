//import
const express = require('express')
const router = express.Router()
const db = require('../../models')
//routes
//INDEX
router.get('/', (req, res) => {
    db.Bounty.find().then(bounties => {
        res.send(bounties)
    }).catch(err => console.error(err))

})

//SHOW
router.get('/:id', (req, res) => {
    db.Bounty.findById(req.params.id).then(bounty => {
        res.send(bounty)
    }).catch(err => console.error(err))
})
//CREATE
router.post('/', (req, res) => {
    // console.log(req.body)
    //check for empty string ('')
    for (key in req.body) {
        if (!req.body[key]) {
            delete req.body[key]
        }
    }
    if (key === 'hunters'&& req.body.hunters) {
        req.body.hunters = req.body.hunters.split(',').map(hunter => hunter.trim())
        // req.body.hunter.forEach((hunter, index) => {
        //     req.body.hunters[index] = hunters.trim()
        // });
    }

    // res.send(req.body)
    console.log(req.body)
    db.Bounty.create(req.body)
    .then(newBounty => {
            res.send(newBounty)
        }).catch(err => console.error(err))
})
//UPDATER
router.put('/:id', (req, res) => {
    db.Bounty.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(updatedBounty => {
        res.send(updatedBounty)
    }).catch(err => console.error(err))
})
//DELETE
router.delete('/:id', (req, res) => {
    db.Bounty.findOneAndDelete({ _id: req.params.id }).then(deletedItem => {
        console.log(deletedItem)
        res.send({ message: 'successful deletion' }).catch(err => console.error(err))
    })
})
//export
module.exports = router