module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("games", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    // win - loss
    outcome: {
      type: Sequelize.STRING
    },
    guesses: {
      type: Sequelize.INTEGER
    },
    wordLength: {
      type: Sequelize.INTEGER
    }
  })
  return Game
}
