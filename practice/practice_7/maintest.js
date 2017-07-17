'use strict';

describe('practice2', function()  {

    it('There is student named Tom', function() {
        let answer="My name is Tom. I am 21 years old.";
        var result = new Person('Tom',21).introduce();
        expect(result).toEqual(answer);

    });

    it('There is student named Tom,at class2', function() {
        let answer="My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        var result = new Student('Tom',21,2).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching class2.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach class 2.";
        var result = new Teacher('Tom',21,2).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching No Class.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach No Class.";
        var result = new Teacher('Tom',21,'').introduce();
        expect(result).toEqual(answer);

    });

});