'use strict';
var readlinesync = require('readline-sync');
global.students=[];
class subject{
    constructor(name,score){
        this.name=name;
        this.score=score;
    }
}

class Student {
    constructor(name,id,nation,grade,subject1,subject2,subject3,subject4) {
        this.id = id;
        this.name = name;
        this.grade=grade;
        this.subject1=subject1;
        this.subject2=subject2;
        this.subject3=subject3;
        this.subject4=subject4;
    }
}

//fenjie string to array
function GetArray(Information){
    while(Information.indexOf(" ")!=-1) {
        Information=Information.replace(" ","");
    }
    Information=Information.split(':');
    Information=Information.join();
    Information=Information.split(',');

    return Information;
}

//panduan
function MatchFormate(Information){
    let result=1;
    for(let i=0; i<Information.length;i++){
        if(typeof Information[i] !== 'string'){
            result=0;
        }
    }

    return result;
}

//student object;
function getInformation(Information){
    var subject1=new subject(Information[4],parseInt(Information[5]));
    var subject2=new subject(Information[6],parseInt(Information[7]));
    var subject3=new subject(Information[8],parseInt(Information[9]));
    var subject4=new subject(Information[10],parseInt(Information[11]));
    var student=new Student(Information[0],Information[1],Information[2],Information[3],
    subject1,subject2,subject3,subject4);
    return student;
}



function addstudentAchieve(){
    var Input='请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：';
    console.log(Input);
    var Information=readlinesync.question()
     Information=GetArray(Information);
    let result=MatchFormate(Information);
    console.log(result);
    console.log(Information);
        if(result){
            let student = getInformation(Information);
            students.push(student);
            console.log('学生'+student.name+'的成绩被添加');
        }
        else{
            console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：')
        }
}

module.exports ={
    addstudentAchieve,
    GetArray
};



//xll,2015,han,23,yuwen:80,yingyu:80,hanyu:80,biancheng:80