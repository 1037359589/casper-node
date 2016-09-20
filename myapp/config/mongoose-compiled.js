/**
 * Created by pzl on 16/6/17.
 */
var mongoose = require("mongoose");
var config = require("./config.js");
module.exports = function () {
    var db = mongoose.connect(config.mongodb);
    require("../model/A_Data.js");
    return db;
};

//# sourceMappingURL=mongoose-compiled.js.map