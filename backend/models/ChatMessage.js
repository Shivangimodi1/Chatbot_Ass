module.exports = (sequelize, DataTypes) => {
  const ChatMessage = sequelize.define("ChatMessage", {
    keyword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  return ChatMessage;
};
