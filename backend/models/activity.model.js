module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activity", {
    name: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.INTEGER
    },
    paid: {
      type: Sequelize.INTEGER
    },
    time: {
      type: Sequelize.DATE
    },
    filename: {
      type: Sequelize.INTEGER
    }
  });

  return Activity;
}