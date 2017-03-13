var chai = require('chai');
var yaml = require('node-yaml');
var should = chai.should();
var expect = chai.expect;

describe("interaction resolver", function(){
    var ir = require("../hanging-munchkin-components/interactionResolver");

    it("should resolve an action", function(){
        actionDefinition = ir.parseAction("click: #theButton");
        expect(actionDefinition.action).to.equal("click");
    });

    it("should resolve a selector", function(){
        actionDefinition = ir.parseAction("click: #theButton");
        expect(actionDefinition.selector).to.equal("#theButton");
    });

    it("should create an interaction", function(){
        var name = "test name",
            interaction = ir.createInteraction({name: name, action: "click: #theButton"});

        expect(interaction.name).to.equal(name);
        expect(interaction.execute).to.be.a('function');
    });
});

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
        },
        startUrl = "http://localhost:63342/node-workspace/node_modules/hanging-munchkin/hanging-munchkin-test.html";

    it("should be able to log", function(){
        var hm = require("../hanging-munchkin.js")(fakeCasper);
        hm.log("this is log");
        hm.info("this is info");
        hm.warn("this is a warning");
        hm.error("this is an error");
    });

    it("should call interactionResolver.parseAction when run", function(){
        var called = false,
            hm = require("../hanging-munchkin.js")(fakeCasper, {name: "test interaction", parseAction: function(){
                called = true;
            }});
        hm.runInteraction(startUrl, {action: "click: #aLink"});
        expect(called).to.equal(true);
    });
});