class Person {
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(id, name,age ,klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let str = this.klass.leader == this.id ?
            `leader of Class ${this.klass.number}` : `at Class ${this.klass.number}`;
        return `${super.introduce()} I am a Student. I am ${str}.`;
    }
}

class Teacher extends Person {
    constructor(id, name, age, classes) {
        super(id, name, age);
        this.classes = classes;
        for (let klass of this.classes) {
            klass.teachers.push(this);
        }
    }

    introduce() {
        let classString = "";
        if (this.classes.length == 0 || this.classes == null) {
            classString = 'No Class';
        } else {
            let classArr = [];
            for (let klass of this.classes) {
                classArr.push(klass.number);
            }
            classString = classArr.join(',');
        }
        return `${super.introduce()} I am a teacher. I teach ${classString}.`;
    }

    isTeaching(student) {
        let result = false;
        for (let klass of this.classes) {
            if (student.klass.number==klass.number) {
                result = true;
                break;
            }
        }
        return result;
    }

    isLeader(student){
        let result = false;
        for (let klass of this.classes) {
            if (student.id==klass.leader) {
                result = true;
                break;
            }
        }
        return result;
    }

    informJoin(klass, student) {
        return`I am ${this.name}. I know ${student.name} has joined Class ${klass.number}.`;
    }

    informLeader(klass, student) {
        return`I am ${this.name}. I know ${student.name} become leader of Class ${klass.number}.`;
    }
}

class Klass {
    constructor(number) {
        this.number = number;
        this.students = [];
        this.teachers = [];
    }

    assignLeader(student) {
            if(student.klass.number!=this.number){
                return `It is not one of us.`;
            }
            else
                this.leader=student.id;
            for (let teacher of this.teachers) {
            teacher.informLeader(this, student);
            }
        }

    appendMember(student) {
        student.klass = this;
        this.students.push(student);
        for (let teacher of this.teachers) {
            teacher.informJoin(this, student);
        }
    }
}