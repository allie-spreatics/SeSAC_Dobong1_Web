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
        // sns 로그인시 pw 안들어올 수도 있으므로,
        allowNull: true,
        defaultValue: null,
      },

      provider: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "local",
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
