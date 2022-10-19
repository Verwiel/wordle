const db = require("../models")
const Word = db.word


exports.getRandomWord = async (req, res) => {
  try {
    let randomWord = await Word.findOne({ 
      where: { length: req.query.length },
      order: [ db.Sequelize.literal('RAND()') ]
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
        word: req.query.word,
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
