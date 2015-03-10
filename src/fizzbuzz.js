'use strict';

var DividerBasedTranslator = (function() {
    
    function DividerBasedTranslator(divider, returnValue) {
        this.divider = divider;
        this.returnValue = returnValue;
    };
    
    DividerBasedTranslator.prototype.translate = function(number, translatedValue) {
        var result = '';
        
        if (number %  this.divider == 0)
            result = this.returnValue;
            
        return result;
    };
    
    return DividerBasedTranslator;
    
})();

var DefaultTranslator = (function() {
    
    function DefaultTranslator() {};
    
    DefaultTranslator.prototype.translate = function(number, translatedValue) {
        var result = '';
        
        if (translatedValue == '')
            result = number.toString();
            
        return result;
    };
    
    return DefaultTranslator;
    
})();

var FizzBuzzTranslator = (function() {
        
    function FizzBuzzTranslator(rules) {
        this.rules = rules;
    };
    
    FizzBuzzTranslator.prototype.translate = function(number) {
        var translated = '';
        
        for(var i = 0; i < this.rules.length; ++i)
            translated += this.rules[i].translate(number, translated);
            
        return translated;
    };
    
    return FizzBuzzTranslator;
    
})();

var FizzBuzz = (function() {
    
    function FizzBuzz(fizzBuzzTranslator) {
        this.fizzBuzzTranslator = fizzBuzzTranslator;
    };
    
    FizzBuzz.prototype.generate = function(min, max) {
        var fizzBuzzArray = [];
        
        for(var i = min; i < max + 1; ++i)
            fizzBuzzArray.push(this.fizzBuzzTranslator.translate(i));
        
        return fizzBuzzArray;
    };
    
    return FizzBuzz;
    
})();

module.exports = {
    FizzBuzz: FizzBuzz,
    FizzBuzzTranslator: FizzBuzzTranslator,
    DividerBasedTranslator: DividerBasedTranslator,
    DefaultTranslator: DefaultTranslator
};