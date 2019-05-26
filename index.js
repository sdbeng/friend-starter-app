const express = require("express")
const path = require("path")
const home = require("./app/routing/htmlRoutes")

const app = express()
let PORT = process.env.PORT || 8089

/////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/////////////////////////////////////////////
// router - require routes
/////////////////////////////////////////////
// require("./app/routing/htmlRoutes")(app)

/////////////////////////////////////////////
// test2
/////////////////////////////////////////////
const hey = home.funcTest()
console.log(hey)
/////////////////////////////////////////////
// testing root /
/////////////////////////////////////////////
// NOTE: if playing with 2 app instances you must pass app as a param to the func
home.homeView(app)

// hack
home.hack(app)

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
app.listen(PORT, function() {
  console.log("App listening on port", PORT)
})
