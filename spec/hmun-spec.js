var hmun = require("../hmun.js");

//#start
describe("hanging munchkin", function(){
    it("can run", function(done){
        var Spooky = require('spooky');
        var spooky = new Spooky({
            casper: {
                logLevel: 'debug',
                verbose: true
            }
        }, function (err) {
            if (err) {
                e = new Error('Failed to initialize SpookyJS');
                e.details = err;
                throw e;
            }
            var counter = 0;
            spooky.start('http://en.wikipedia.org/wiki/Spooky_the_Tuff_Little_Ghost');
            spooky.thenEvaluate(function () {
                counter += 1;
            });
            spooky.run(done);
        });
    });
});
//#/end