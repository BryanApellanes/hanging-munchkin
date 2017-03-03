module.exports = (function(casper){
    "use strict";
    return{
        run: function(done){
            casper.start('http://casperjs.org/', function() {
                this.echo('monkey' + this.getTitle());
            });

            casper.thenOpen('http://phantomjs.org', function() {
                this.echo('yay' + this.getTitle());
                done();
            });
            casper.echo("blah");
            casper.run();
        }
    };
})(casper);