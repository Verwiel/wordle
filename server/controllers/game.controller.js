const db = require("../models")
const Game = db.game

exports.getUsersGames = async (req, res) => {
  try {
    const games = await Game.findAll({ include: User })
    res.status(200).send(games)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

exports.submitGame = async (req, res) => {
  const { gameData, userData } = req.body
  console.log(req.body)
  try {
    const game = await Game.create(req.body.gameData)
    const userUpdate = 
    res.status(200).send(game)
  } catch(err) {
    console.log(err)
    res.status(500).send({ message: err.message })
  }
}
