"use strict";

var expect = require("chai").expect;
var FizzBuzz = require("../src/fizzbuzz.js");

describe("FizzBuzz", function() {
    
    describe("#generate", function() {
       
        beforeEach(function() {
           this.fizzBuzz = new FizzBuzz.FizzBuzz(new FizzBuzz.FizzBuzzTranslator([
                                                    new FizzBuzz.DividerBasedTranslator(3, "Fizz"),
                                                    new FizzBuzz.DividerBasedTranslator(5, "Buzz"),
                                                    new FizzBuzz.DefaultTranslator()
                                                ]));
        });
        
        it("should be an empty array", function() {
            expect(this.fizzBuzz.generate(1, 0)).to.be.empty;    
        });
        
        [
            { min: 1, max: 1, expect: ["1"] },
            { min: 1, max: 2, expect: ["1", "2"] },
            { min: 1, max: 3, expect: ["1", "2", "Fizz"] },
            { min: 1, max: 4, expect: ["1", "2", "Fizz", "4"] },
            { min: 1, max: 5, expect: ["1", "2", "Fizz", "4", "Buzz"] },
            { min: 14, max: 18, expect: ["14", "FizzBuzz", "16", "17", "Fizz"] },
            { min: 20, max: 30, expect: ["Buzz", "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz"]}
        ].
        forEach(function(currentValue) {
            it("should be [" + currentValue.expect.join(", ") + "] for (" + currentValue.min + ", " + currentValue.max + ")", function() {
                expect(this.fizzBuzz.generate(currentValue.min, currentValue.max)).to.eql(currentValue.expect);
            });            
        });
    });
});
