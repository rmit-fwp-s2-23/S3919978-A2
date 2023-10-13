module.exports = (sequelize, DataTypes) =>
  sequelize.define("movie", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length: {
        type: DataTypes.STRING,
    },
    release_date: {
        type: DataTypes.STRING,
    },
    poster: {
        type: DataTypes.STRING,
    },
    description:{
        type: DataTypes.TEXT,
    },
    released: {
        type: DataTypes.BOOLEAN,
    },
    friendly_url: {
        type: DataTypes.STRING,
    }
  });
