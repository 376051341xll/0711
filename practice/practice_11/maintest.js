'use strict';

describe('practice2', function()  {

    it('There is student named Tom', function() {
        let answer="My name is Tom. I am 21 years old.";
        var result = new Person(2015,'Tom',21).introduce();
        expect(result).toEqual(answer);

    });

    it('There is student named Tom,at class2', function() {
        let answer="My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        let klass= new Klass(2);
        var result = new Student(2016,'Tom',21,klass).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching class2,3.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach 2,3.";
        let classes =[];
        let klass1=new Klass(2); classes.push(klass1);
        let klass2=new Klass(3);classes.push(klass2);
        var result = new Teacher(2017,'Tom',21,classes).introduce();
        expect(result).toEqual(answer);

    });

    it('There is teacher named Tom, teaching No Class.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach No Class.";
        let classes =[];
        //let klass1=new Klass(''); classes.push(klass1);
        var result = new Teacher(2018,'Tom',21,classes).introduce();
        expect(result).toEqual(answer);

    });

    xit('There is teacher named Tom, teaching Jerry.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I teach Jerry.";
        let klass=new Klass(2);
        let student=new Student(2019,'Jerry',20,klass);
        var result = new Teacher(2009,'Tom',21,klass).introduceWith(student);
        expect(result).toEqual(answer);

    });

    xit('There is teacher named Tom, do not teach Jerry.', function() {
        let answer="My name is Tom. I am 21 years old. I am a teacher. I don't teach Jerry.";
        let klass=new Klass(2);
        let student=new Student(2010,'Jerry',20,3);
        var result = new Teacher(2011,'Tom',21,klass).introduceWith(student);
        expect(result).toEqual(answer);

    });

    it('There is student named Tom,leading class 2.', function() {
        let answer="My name is Tom. I am 21 years old. I am a Student. I am leader of Class 2.";
        let klass=new Klass(2);
        let Tom=new Student(2011,'Tom',21,klass)
        klass.assignLeader(Tom);
        //klass.leader=Tom.id;
        var result = Tom.introduce();
        expect(result).toEqual(answer);

    });
    it('There is student named Tom, do not lead class 2.', function() {
        let answer="My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
        let klass=new Klass(2);
        let Jerry=new Student(2010,'Jerry',21,klass);
        klass.assignLeader(Jerry);
        var result =new Student(2011,'Tom',21,klass).introduce();
        expect(result).toEqual(answer);

    });

    it('There is a student is not class 2.', function() {
        let answer="It is not one of us.";
        let klass=new Klass(2);
        let klass2=new Klass(3);
        let Jerry=new Student(2010,'Jerry',21,klass2)
        var result1=klass.assignLeader(Jerry);
        expect(result1).toEqual(answer);

    });


});