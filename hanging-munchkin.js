module.exports = (function(){
    "use strict";
    var _ = require("lodash"),
        interaction = require("./interaction.js"),
        munchkinOptions = {

    };

    return{
        configure: function(options){

        },
        getInteraction: function(name){
            return {
                name: name,
                action: {
                    click: "#button"
                },
                wait: {
                    forSelector: "#blah"
                },
                expect: function(){
                    return true;
                }
            };
        },
        testCasperCalls: function(casper){
            console.log('running testCasperCalls');

            casper.start('http://casperjs.org/', function() {
                this.echo(this.getTitle());
            });

            casper.thenOpen('http://phantomjs.org', function() {
                this.echo(this.getTitle());
            });

            casper.echo("testCasperCalls done");
            return casper;
        },
        runInteraction: function(interactionName, casper){

        }
    };
})();