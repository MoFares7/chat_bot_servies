const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chatbot_z7py', 'chatbot_z7py_user', 'gfkvVY5NGVgQSlkf7uc9iKM9LZSNz9BS', {
        host: 'dpg-cooc98f79t8c73bas4mg-a',
        dialect: 'postgres',
});

module.exports = sequelize;



