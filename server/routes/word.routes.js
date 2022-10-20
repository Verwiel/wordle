const { authJwt } = require("../middleware")
const controller = require("../controllers/word.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })

  // gets a rnadom word, requires length req.query
  app.get("/random-word", controller.getRandomWord)
  app.get("/check-word", controller.checkWordValidity)

  app.post(
    "/api/request-word",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.addWord
  )

  app.put(
    "/api/approve-word",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.approveWord
  )

  app.delete(
    "/api/remove-word",
    [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
    controller.removeWord
  )
}
