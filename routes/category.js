var express = require('express');
var router = express.Router();
var CategoryModel = require('.././model/category');

router.post("/all",function (req, res, next) {
    CategoryModel.Category.findAll().then(function (categories) {
        var categoriesArray = categories.map(function (c) {
            return c.dataValues;
        });

        res.render('partial/_category',{
            categories: categoriesArray
        });
    });
});


module.exports = router;