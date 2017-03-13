var _ = require("lodash");

var hangingMunchkin = (function(casper, interactionResolver, logger){
    "use strict";

    var _casper = casper,
        _logger = logger == undefined ? {log: console.log}: {log: logger.log},
        _interactionResolver = _.extend(require("./hanging-munchkin-components/interactionResolver"), interactionResolver),
        _startUrl = "about:blank",
        _casperStarted = false;

    _logger = require("./hanging-munchkin-components/logger.js")(_logger);

    function resolveInteractionName(interaction){
        return interaction.name || "[Interaction name not specified]";
    }

    function startCasper(){
        _casper.start(_startUrl);
        return _casper;
    }

    return{
        log: _logger.log,
        info: _logger.info,
        warn: _logger.warn,
        error: _logger.error,
        runInteraction: function(interaction){
            this.log("running interaction " + resolveInteractionName(interaction));
            if(!_casperStarted){
                startCasper();
            }
            var action = _interactionResolver.createInteraction(interaction);

            return this;
        },
        start: function(startUrl){
            _startUrl = startUrl;
        },
        testCasperCalls: function(){
            console.log('running testCasperCalls');

            _casper.start('http://casperjs.org/', function() {
                this.echo(this.getTitle());
            });

            _casper.thenOpen('http://phantomjs.org', function() {
                this.echo(this.getTitle());
            });

            _casper.echo("testCasperCalls done");
            return _casper;
        }
    };
});

module.exports = hangingMunchkin;