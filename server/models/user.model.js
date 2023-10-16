module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
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
