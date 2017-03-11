(function(casper){
    casper.start('about:blank');

    var hangingMunchkin = require("./hanging-munchkin.js");
    hangingMunchkin.runInteraction("test monkey", casper);

    casper.run();
})(casper);