module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define("words", {
    word: {
      primaryKey: true,
      type: Sequelize.STRING
    },
    length: {
      type: Sequelize.INTEGER
    },
    approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
  })
  return Word
}
