const Sequelize = require('sequelize');
const sequelize = new Sequelize('school', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
//========== connecting database ==================