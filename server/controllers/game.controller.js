const db = require("../models")
const Game = db.game

exports.getUsersGames = async (req, res) => {
  try {
    const games = await Game.findAll({ where: { userId: req.params.id } })
    res.status(200).send(games)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

exports.submitGame = async (req, res) => {
  try {
    const game = await Game.create(req.body)
    res.status(200).send(game)
  } catch(err) {
    console.log(err)
    res.status(500).send({ message: err.message })
  }
}
