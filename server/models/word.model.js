module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define("words", {
    word: {
      primaryKey: true,
      type: Sequelize.STRING
    },
    length: {
      type: Sequelize.INTEGER
    },
    definition: {
      type: Sequelize.STRING
    },
    approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
  })
  return Word
}
