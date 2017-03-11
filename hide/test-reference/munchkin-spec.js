var munchkin = require("../hanging-munchkin");

describe("munchkin test runner", function(){
    it("should run", function(done){
        munchkin.run(function(){
            console.log("it worked!");
            done();
        });
    });
});
