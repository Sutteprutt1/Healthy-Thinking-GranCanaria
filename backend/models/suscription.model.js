module.exports = (sequelize, Sequelize) => {
  const Suscription = sequelize.define("suscription", {
    start_time: {
      type: Sequelize.STRING
    },
    end_time: {
      type: Sequelize.STRING
    }
  });

  return Suscription;
}