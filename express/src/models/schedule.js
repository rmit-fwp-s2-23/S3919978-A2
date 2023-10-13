module.exports = (sequelize, DataTypes) =>
  sequelize.define("schedule", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    slot: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, {
    timestamps: false
  });
