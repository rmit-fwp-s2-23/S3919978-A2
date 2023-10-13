module.exports = (sequelize, DataTypes) =>
  sequelize.define("cinema", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {
    timestamps: false
  });
