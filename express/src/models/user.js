module.exports = (sequelize, DataTypes) =>
  sequelize.define("user", {
    first_name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
  });
