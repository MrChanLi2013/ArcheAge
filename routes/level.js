var express = require('express');
var router = express.Router();
var LevelModel = require('.././model/level');

router.post("/all",function (req, res, next) {
    LevelModel.Level.findAll().then(function (levels) {
        var levelsArray = levels.map(function (l) {
            return l.dataValues;
        });

        res.render('partial/_level',{
            levels: levelsArray
        });
    });
});


module.exports = router;