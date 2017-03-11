module.exports = (function(){
    "use strict";

    return{
        // getInteraction: function(name){
        //     return {
        //         name: name,
        //         action: {
        //             click: "#button"
        //         },
        //         wait: {
        //             forSelector: "#blah"
        //         },
        //         expect: function(){
        //             return true;
        //         }
        //     };
        // },
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
            console.log("running interaction " + interactionName);
            casper.thenOpen('http://google.com', function(){
                this.echo(this.getTitle());
            });
            return casper;
        }
    };
})();