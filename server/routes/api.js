const express = require('express')
const request = require('request')

const router = express.Router()


// router.get("/teams/:teamName", function (req, res) {
//     request('http://data.nba.net/10s/prod/v1/2018/players.json', function (error, response, body) {
//         console.log(teamToIDs[req.params.teamName])
//         let players = JSON.parse(body).league.standard.filter(p => p.teamId === teamToIDs[req.params.teamName]).filter(p => p.isActive)
//         players = players.map(function (p) {
//             return {
//                 firstName: p.firstName,
//                 lastName: p.lastName,
//                 jersey: p.jersey,
//                 pos: p.pos,
//                 id: p.personId
//             }
//         })
//         res.send(players)
//     })
// })


module.exports = router