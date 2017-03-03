var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo('monkey' + this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo('yay' + this.getTitle());
});
casper.echo("blah");
casper.run();