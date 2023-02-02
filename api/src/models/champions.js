const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Champion",
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      story: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      img: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
