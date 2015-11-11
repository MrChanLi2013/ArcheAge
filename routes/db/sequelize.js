/**
 * MySQL连接,返回connection
 * @type {Sequelize}
 */
var Sequelize = require('sequelize');

exports.getConnection = function () {
    return new Sequelize('test', 'root', 'root', {
        host: 'localhost',
        dialect: 'mysql',
        timezone : "+08:00",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
};