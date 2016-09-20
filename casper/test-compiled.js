/**
 * Created by pzl on 16/9/20.
 */
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Aa = mongoose.model("Aa");
var targetUrls = ['https://cnodejs.org/'];
var data = [{ index: 1 }];

router.get('/', function (req, res, next) {
    fs.readFile('../file/file.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
        Aa.create(data, function (err, doc) {
            if (err) {
                console.log(err);
                return;
            }
            //Aa.insertReturnDoc=doc;
            //if(fn instanceof Function){
            //    fn(doc);
            //}
            console.log(插入成功);
        });
    });
});

module.exports = router;

//# sourceMappingURL=test-compiled.js.map