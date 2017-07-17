'use strict';
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Klass{
    constructor(number){
        this.number=number;
    }
}

class Student extends Person{
    constructor (name,age,klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){

        return super.introduce() + ` I am a Student. I am at Class ${this.klass}.`;
    }
}


class Teacher extends Person{
    constructor (name,age,klass=new Klass){
        super(name,age);
        this.klass=klass;
    }

    introduce(){
        let word;
        if(this.klass=='')
            word = super.introduce() + ` I am a teacher. I teach No Class.`;
        else
            word=super.introduce() + ` I am a teacher. I teach class ${this.klass}.`;
        return word;
    }

    introduceWith(student){
        let word;
        if(this.klass==student.klass)
            word = super.introduce() + ` I am a teacher. I teach ${student.name}.`;
        else if(this.klass!=student.klass)
            word = super.introduce() + ` I am a teacher. I don't teach ${student.name}.`;
        return word;
    }
}