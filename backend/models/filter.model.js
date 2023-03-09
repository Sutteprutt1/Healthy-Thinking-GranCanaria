module.exports = (sequelize, Sequelize) => {
  const Filter = sequelize.define("filter", {
    name: {
      type: Sequelize.STRING
    },
  });

  return Filter;
}