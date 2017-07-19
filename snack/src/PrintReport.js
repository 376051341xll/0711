'use strict';
var readlinesync = require('readline-sync');
var add=require('./add');

function midnum(sum){
    let mid;
    if(sum.length%2 !=0){
        mid=sum[(sum.length+1)/2];
    }
    else
        mid=(sum[sum/2]+sum[sum/2+1])/2;
    return mid;
}

function sougo(num){
    let word=[];
    let sum=[];
    let aver=[];
    let sumall=0;
    for(let i=0; i<num.length; i++) {
        parseInt(num[i]);
        for (let j=0; j<students.length; j++) {
            if (num[i] ==students[j].id) {
                sum[i] = students[j].subject1.score + students[j].subject2.score +students[j].subject3.score + students[j].subject4.score;
                aver[i] = sum / 4;
                word[i] = students[j].name + '|' + students[j].subject1.score + '|' +students[j].subject2.score
                    + '|' + students[j].subject3.score + '|' + students[j].subject4.score + '|' + sum[i] + '|' + aver[i]+'\n';
            }
        }
        sumall +=sum[i]/4;
    }
    let mid=midnum(sum);
    return `成绩单`+'\n'+`姓名|数学|语文|英语|编程|平均分|总分`+'\n'+ `========================`+'\n'+ word+`========================`
        +'\n'+ `全班总分平均数：`+sumall+ '\n'+`全班总分中位数：`+mid+'\n';
}

function printReport(){
    var Input='请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：';
    console.log(Input);
    var num=readlinesync.question();
    num=add.GetArray(num);
    let word=sougo(num);
    console.log(word);
}

module.exports=printReport;