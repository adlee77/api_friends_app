const friends = require("../data/friends.json")
const fs = require("fs")
function apiRoutes(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    } )
    app.post("/api/friends", (req, res) => {
        console.log(req.body)
        let difference = 0
        for (let i = 0; i < friends.length; i++){
            difference = 0
            for (let j = 0; j < friends[i].scores.length; j++){
                friends[i].scores[j] = parseInt(friends[i].scores[j])
                difference += Math.abs(friends[i].scores[j] - parseInt(req.body.scores[j]))
            }

            friends[i].difference = difference
        }


       
          console.log(friends)


        friends.sort((a, b)=>{return a.difference - b.difference})
        
        friends.push(req.body)

        fs.writeFile("./app/data/friends.json", JSON.stringify(friends), function(err){
            console.log("success")
        })
        res.json(friends[0])
    })
}

module.exports = apiRoutes