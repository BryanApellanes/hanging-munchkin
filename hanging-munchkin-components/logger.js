var _ = require("lodash"),
    colors = require("../node_modules/colors");

var loggerFactory = (function(options){
    "use strict";

    return _.extend({
        log: console.log,
        info: function(msg){
            console.log(msg.cyan);
        },
        warn: function(msg){
            console.log(msg.yellow);
        },
        error: function(msg){
            console.log(msg.red);
        }
    }, options);
});

module.exports = loggerFactory;