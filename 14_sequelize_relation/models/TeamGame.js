const TeamGameModel = (sequelize, DataTypes) => {
  const TeamGame = sequelize.define(
    "TeamGame",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return TeamGame;
};

module.exports = TeamGameModel;
