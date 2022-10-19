// const { authJwt } = require("../middleware")
const controller = require("../controllers/game.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })

  app.get("/games", controller.getUsersGames)
  app.post("/submit-game", controller.submitGame)
}