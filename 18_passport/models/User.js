const User = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING(60),
        allowNull: false,
        primaryKey: true,
      },

      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "passportuser",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return User;
};

module.exports = User;
