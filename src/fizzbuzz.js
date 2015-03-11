"use strict";

var DividerBasedTranslator = (function() {
    
    function InnerDividerBasedTranslator(divider, returnValue) {
        this.divider = divider;
        this.returnValue = returnValue;
    }
    
    InnerDividerBasedTranslator.prototype.translate = function(number) {
        var result = "";
        
        if (number % this.divider === 0)
        {
            result = this.returnValue;
        }
            
        return result;
    };
    
    return InnerDividerBasedTranslator;
})();

var DefaultTranslator = (function() {
    function InnerDefaultTranslator() {}
    
    InnerDefaultTranslator.prototype.translate = function(number, translatedValue) {
        var result = "";
        
        if (translatedValue === "")
        {
            result = number.toString();
        }
            
        return result;
    };
    
    return InnerDefaultTranslator;
})();

var FizzBuzzTranslator = (function() {
        
    function InnerFizzBuzzTranslator(rules) {
        this.rules = rules;
    }
    
    InnerFizzBuzzTranslator.prototype.translate = function(number) {
        var translated = "";
        
        for(var i = 0; i < this.rules.length; ++i)
        {
            translated += this.rules[i].translate(number, translated);
        }
            
        return translated;
    };
    
    return InnerFizzBuzzTranslator;
})();

var FizzBuzz = (function() {
    
    function InnerFizzBuzz(fizzBuzzTranslator) {
        this.fizzBuzzTranslator = fizzBuzzTranslator;
    }
    
    InnerFizzBuzz.prototype.generate = function(min, max) {
        var fizzBuzzArray = [];
        
        for(var i = min; i < max + 1; ++i)
        {
            fizzBuzzArray.push(this.fizzBuzzTranslator.translate(i));
        }
        
        return fizzBuzzArray;
    };
    
    return InnerFizzBuzz;
})();

module.exports = {
    
    FizzBuzz: FizzBuzz,
    FizzBuzzTranslator: FizzBuzzTranslator,
    DividerBasedTranslator: DividerBasedTranslator,
    DefaultTranslator: DefaultTranslator
    
};
