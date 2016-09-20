/**
 * Created by pzl on 16/9/20.
 */
var casper = require('casper').create();
var fs = require("fs");

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
    var linkArr=[];
    for(var i in links) {
        var link={link:links[i]};
        console.log(links[i]);
        linkArr.push(link);
    }
    //console.log(fs);
    fs.write('./myapp/file/file.json',JSON.stringify(linkArr),  function(err) {
        if (err) {
            console.log("222s");
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
    });
    casper.done();
});