const express = require('express')
const request = require('request')

const router = express.Router()

router.get("/sanity", function (req, res) {
    console.log("someone is here")
    res.send("ok")
})

router.get("/recipes", function (req, res) {

    let url = `http://www.recipepuppy.com/api/`
    if (req.query.ingredients && req.query.food) {
        url += `?q=${req.query.food}&i=${req.query.ingredients}`
    }
    else if (req.query.food) {
        url += `?q=${req.query.food}`
    }
    else {
        url += `?i=${req.query.ingredients}`
    }
    console.log(url)
    request(url, function (error, response, body) {
        
        //on search like "http://localhost:8080/recipes?food=cake&ingredients=banana,flour"
        // the api respond with html file and because of the JSON parser it stops the server
        if(body[0]=='<'){
            console.log(`that is html...`)
            console.log(body)
            res.end()
        }else{
            let results = JSON.parse(body||{}).results
            results.map(r => r.ingredients = r.ingredients.split(", "))
            results.forEach(r => {r.ingredients = r.ingredients.map(i => i = { "name": i })});
            res.send(results)
        }
    })
})




module.exports = router