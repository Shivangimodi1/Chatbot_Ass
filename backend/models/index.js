const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.ChatMessage = require('./Chatessage')(sequelize, Sequelize.DataTypes);
db.User = require('./User')(sequelize, Sequelize.DataTypes);

module.exports = db;
