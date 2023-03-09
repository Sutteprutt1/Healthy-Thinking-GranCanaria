module.exports = (sequelize, Sequelize) => {
  const Filter = sequelize.define("filter", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Filter;
}