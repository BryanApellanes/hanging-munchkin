var interactionResolver = (function(){
    return {
        createInteraction: function(interactionDefinition){
            return {
                name: interactionDefinition.name || "[Interaction.name] not specified",
                actionDefinition: this.parseAction(interactionDefinition.action),
                execute: function(casper){
                    var action = this.actionDefinition.action,
                        selector = this.actionDefinition.selector;
                    return casper[this.actionDefinition.action](selector);
                }
            }
        },
        parseAction: function(actionString){
            var split = actionString.split(':');
            return {
                action: split[0].trim(),
                selector: split[1].trim()
            }
        }
    }
})();

module.exports = interactionResolver;