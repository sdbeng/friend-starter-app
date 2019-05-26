const express = require("express")
const path = require("path")
const friends = require("../data/friends")
const app = express()
// module.exports = (app) => {
//     app.get("/", (req,res) => {
//         res.sendFile(path.join(__dirname, "/../public/home.html"))
//     })

//     app.get("/survey", (req, res) => {
//         res.sendFile(path.join(__dirname, "/../public/survey.html"))
//     })
// }

const homeView = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })
}

const hack = app => {
  app.get("/hack", (req, res) => {
    console.log("hacking...")
    const dani = { name: "Dani" }

    // res.json(dani)
    res.json(friends)
  })
}

const funcTest = () => {
  //   console.log("funcTest LOG")
  return "Hey yooo!"
}

module.exports = {
  homeView: homeView,
  funcTest: funcTest,
  hack
}
