module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return burgers;
};
