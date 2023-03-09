module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.DATE
    },
    filename: {
      type: Sequelize.INTEGER
    }
  });

  return User;
}