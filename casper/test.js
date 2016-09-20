/**
 * Created by pzl on 16/9/20.
 */
var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var Aa=mongoose.model("Aa");
var targetUrls = ['https://cnodejs.org/'];
var data=[{index:1}];



router.get('/', function(req, res, next) {
    Aa.create(data,function(err,doc){
        if(err){
            console.log(err);
            return ;
        }
        //Aa.insertReturnDoc=doc;
        //if(fn instanceof Function){
        //    fn(doc);
        //}
        console.log(插入成功);
    });
});
var casper = require('casper').create();
router.get('/1', function(req, res, next) {

    var links;

    function getLinks() {
// Scrape the links from top-right nav of the website
        var links = document.querySelectorAll('ul.navigation li a');
        return Array.prototype.map.call(links, function (e) {
            return e.getAttribute('href')
        });
    }

// Opens casperjs homepage
    casper.start('http://casperjs.org/');

    casper.then(function () {
        links = this.evaluate(getLinks);
    });

    casper.run(function () {
        for(var i in links) {
            console.log(links[i]);
        }
        casper.done();
    });
});
module.exports = router;

