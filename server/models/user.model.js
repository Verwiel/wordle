module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    currentStreak: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    maxStreak: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
  })
  return User
}
