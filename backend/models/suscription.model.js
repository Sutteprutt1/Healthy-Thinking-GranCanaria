module.exports = (sequelize, Sequelize) => {
  const Suscription = sequelize.define("suscription", {
    start_time: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_time: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });

  return Suscription;
}