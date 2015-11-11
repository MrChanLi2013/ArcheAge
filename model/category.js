var dbUtil = require(".././db/sequelize");
var Sequelize = require('sequelize');

var Category = dbUtil.getConnection().define(
    't_category',
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
Category.sync({force: false});