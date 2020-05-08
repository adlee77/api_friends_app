const express = require("express");
 

const app=express()

const PORT = process.env.PORT ||   3000

app.use(express.urlencoded({extended: true}))

app.use(express.json())



app.use(express.static("app/public"))


const htmlRoutes = require("./app/routing/htmlRoutes")
htmlRoutes(app)

const apiRoutes = require("./app/routing/apiRoutes")(app)


app.listen(PORT, function(){
    console.log("app is listening on http://localhost:" + PORT)
})