'use strict';
class Person{
    constructor(id,name,age){
        this.id=id;
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
    assignLeader(student){
        let word;
        if(student.klass.number!=this.number){
            return `It is not one of us.`;
        }
        else
            this.leader=student.id;
    }
    appendMember(student){
        student.klass.number=this.number;
    }
}

class Student extends Person{
    constructor (id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }

    introduce(){
        let word;
        if(this.klass.leader !=  this.id)
            word=super.introduce() + ` I am a Student. I am at Class ${this.klass.number}.`;
        else if(this.klass.leader == this.id)
            word=super.introduce()+` I am a Student. I am leader of Class ${this.klass.number}.`;

        return word;
    }
}


class Teacher extends Person{
    constructor (id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }

    introduce(){
        let word;
        if(this.klass.number=='')
            word = super.introduce() + ` I am a teacher. I teach No Class.`;
        else
            word=super.introduce() + ` I am a teacher. I teach class ${this.klass}.`;
        return word;
    }

    introduceWith(student){
        let word;
        if(this.klass.number==student.klass.number)
            word = super.introduce() + ` I am a teacher. I teach ${student.name}.`;
        else if(this.klass.number !=student.klass)
            word = super.introduce() + ` I am a teacher. I don't teach ${student.name}.`;
        return word;
    }
}