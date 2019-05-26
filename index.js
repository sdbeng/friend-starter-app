const express = require("express")
const path = require("path")


const app = express()
let PORT = process.env.PORT || 8089

/////////////////////////////////////////////
app.use(express.urlencoded({extended:true}))
app.use(express.json())

/////////////////////////////////////////////
// router - require routes
/////////////////////////////////////////////
require("./app/routing/htmlRoutes")(app)

/////////////////////////////////////////////
// test
/////////////////////////////////////////////
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"))
// })
// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"))
// })

/////////////////////////////////////////////
// server listen
app.listen(PORT, function(){
    console.log("App listening on port", PORT)
})