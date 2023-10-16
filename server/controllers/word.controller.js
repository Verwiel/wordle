const db = require("../models")
const { nodeEnv } = require('../config/auth.config')
const Word = db.word

exports.getRandomWord = async (req, res) => {
  let literalString = nodeEnv === 'development' ? 'RANDOM()' : 'RANDOM()'
  try {
    let randomWord = await Word.findOne({ 
      where: { length: req.query.length },
      order: [ db.Sequelize.literal(literalString) ]
    })
    res.status(200).send(randomWord)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

exports.checkWordValidity = async (req, res) => {
  try {
    let word = await Word.findOne({ 
      where: { 
        word: req.query.word.toLowerCase(),
        length: req.query.length
      } 
    })
    if(word !== null){
      res.status(200).send(true)
    } else {
      res.status(200).send(false)
    }
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

exports.addWord = (req, res) => {
  res.status(200).send("addWord")
}

exports.approveWord = (req, res) => {
  res.status(200).send("approveWord")
}

exports.removeWord = (req, res) => {
  res.status(200).send("removeWord")
}
