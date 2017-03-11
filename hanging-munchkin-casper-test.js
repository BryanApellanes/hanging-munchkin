(function(){
    var hangingMunchkin = require("./hanging-munchkin.js");
    hangingMunchkin.runInteraction("test monkey", casper);

    casper.run();
    debugger;
})();