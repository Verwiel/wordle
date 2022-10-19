const db = require("../models")
const User = db.user

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.")
}

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.")
}

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.")
}

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.")
}

exports.getUserStreak = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.query.username
      }
    })
    res.status(200).send(user)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}

exports.updateUserStreak = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {
        username: req.query.username
      }
    })
    res.status(200).send(user)
  } catch(err) {
    res.status(500).send({ message: err.message })
  }
}
