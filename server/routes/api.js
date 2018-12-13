const express = require('express')
const request = require('request')

const router = express.Router()

router.get("/sanity", function (req, res) {
    console.log("someone is here")
    res.send("ok")
})



router.get("/recipes/:food", function (req, res) {
    console.log(req.params.food)
    request(`http://www.recipepuppy.com/api/?q=${req.params.food}`, function (error, response, body) {
        let results = JSON.parse(body).results
        results.map(r=>r.ingredients=r.ingredients.split(", "))
        results.forEach(r => {
                    r.ingredients=r.ingredients.map(i=>i={"name":i})
                });        
        res.send(results)
    })
})



module.exports = router