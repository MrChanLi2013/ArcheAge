var express = require('express');
var router = express.Router();

/* GET 板甲打造. */
router.get('/plate', function (req, res, next) {
    res.render('plate', {
        title: '上古世纪工具'
    });
});

/* GET 皮甲打造. */
router.get('/leather', function (req, res, next) {
    res.render('leather', {title: 'Express'});
});

/* GET 布甲打造. */
router.get('/cloth', function (req, res, next) {
    res.render('cloth', {title: 'Express'});
});

/* GET 武器打造. */
router.get('/weapon', function (req, res, next) {
    res.render('weapon', {title: 'Express'});
});

router.post('/calculate', function (req, res, next) {
    var category = req.body.category;
    var level = req.body.level;
    var number = req.body.number;
    res.render('partial/_panel');

});

module.exports = router;
