var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Inventory = mongoose.model('Inventory');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.param('item', function(req, res, next, id) {
    var query = Inventory.findById(id);
    query.exec(function(err, item) {
        if (err) { return next(err); }
        if (!item) { return next(new Error("can't find item")); }
        req.item = item;
        return next();
    });
});

router.get('/shopping/:item', function(req, res) {
    res.json(req.item);
});

router.put('/shopping/:item/upvote', function(req, res, next) {
    console.log("Put Route" + req.item.Name);
    req.item.upvote(function(err, item) {
        if (err) { return next(err); }
        res.json(item);
    });
});

router.delete('/shopping/:item', function(req, res) {
    req.item.remove();
    res.sendStatus(200);
});

router.get('/shopping', function(req, res, next) {
    console.log("Get Route");
    Inventory.find(function(err, items) {
        if (err) { console.log("Error"); return next(err); }
        res.json(items);
        console.log("res.json Get Route");
    });
    console.log("returningGet Route");
});

router.post('/shopping', function(req, res, next) {
    console.log("Post Route");
    var item = new Inventory(req.body);
    console.log("Post Route");
    console.log(item);
    item.save(function(err, item) {
        console.log("Error " + err);
        if (err) { return next(err); }
        console.log("Post Route before json");
        res.json(item);
    });
});

module.exports = router;
