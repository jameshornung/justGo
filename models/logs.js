'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('logs', {
    city: DataTypes.STRING,
    categories: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return logs;
};