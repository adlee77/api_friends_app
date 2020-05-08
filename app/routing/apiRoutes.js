const friends = require("../data/friends.json")
const fs = require("fs")
function apiRoutes(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    } )
    app.post("/api/friends", (req, res) => {
        console.log(req.body)
        friends.push(req.body)
          console.log(friends)


        fs.writeFile("./app/data/friends.json", JSON.stringify(friends), function(err){
            console.log("success")
        })

        res.json(friends)
    })
}

module.exports = apiRoutes