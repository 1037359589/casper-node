/**
 * Created by pzl on 16/9/20.
 */
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Aa = mongoose.model("Aa");
var targetUrls = ['https://cnodejs.org/'];
var data = [{ link: "dasdasd" }, { link: "kkkk" }];
var fs = require("fs");

router.get('/', function (req, res, next) {
    fs.readFile('./file/file.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        var data1 = new Buffer(data).toString();
        var datas = [];
        JSON.parse(data1).forEach(function (v, k) {
            datas.push(v);
            console.log(v);
        });
        Aa.create(datas, function (err, doc) {
            if (err) {
                console.log(err);
                return;
            }
            console.log("插入成功", doc);
        });
    });
});
module.exports = router;

//# sourceMappingURL=test-compiled.js.map