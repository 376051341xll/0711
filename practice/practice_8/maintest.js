'use strict';

describe('practice2', function()  {

    it('There is student named Tom', function() {
        let answer="My name is Tom. I am 21 years old.";
        var result = new Person('Tom',21).introduce();
        expect(result).toEqual(answer);

    });

    it('There is student named Tom,at class2', function() {
        let answer="My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        let klass= new Klass(2).number;
        var result = new Student('Tom',21,klass).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching class2.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach class 2.";
        let klass =new Klass(2).number;
        var result = new Teacher('Tom',21,klass).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching No Class.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach No Class.";
        let klass=new Klass('').number;
        var result = new Teacher('Tom',21,klass).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching Jerry.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach Jerry.";
        let klass=new Klass(2).number;
        let student=new Student('Jerry',20,klass);
        var result = new Teacher('Tom',21,klass).introduceWith(student);
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, do not teach Jerry.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I don't teach Jerry.";
        let klass=new Klass(2).number;
        let student=new Student('Jerry',20,3);
        var result = new Teacher('Tom',21,klass).introduceWith(student);
        expect(result).toEqual(answer);

    });



});