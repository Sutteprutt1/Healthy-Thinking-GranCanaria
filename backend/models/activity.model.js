module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activity", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    time: {
      type: Sequelize.DATE
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });

  return Activity;
}