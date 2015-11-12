var dbUtil = require(".././db/sequelize");
var Sequelize = require('sequelize');

var Level = dbUtil.getConnection().define(
    't_level',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    }
);

//创建表
Level.sync({force: false});

exports.Level = Level;