module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
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
