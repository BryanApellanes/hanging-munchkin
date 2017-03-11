var munchkin = require("../hanging-munchkin.js");
var chai = require('chai');
var yaml = require('node-yaml');
var should = chai.should();
var expect = chai.expect;

describe("munchkin test runner", function(){
    var startCalls = 0,
        echoCalls = 0,
        thenOpenCalls = 0,
        fakeCasper = {
            start: function(){
                startCalls++;
            },
            echo: function(){
                echoCalls++;
            },
            thenOpen: function(){
                thenOpenCalls++;
            }
        };
    it("should call casper", function(){
        var fake = munchkin.testCasperCalls(fakeCasper);
        startCalls.should.equal(1);
        expect(echoCalls).to.equal(1, "echoCalls should be 1 but was " + echoCalls);
    });
    it("should read instantiate interaction", function(){
        var testInteraction = munchkin.getInteraction("test Interaction");
        console.log(JSON.stringify(testInteraction));
        console.log(yaml.dump(testInteraction));
    });
});