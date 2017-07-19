'use strict';
var readlinesync = require('readline-sync');
var add= require('./add');
var printReport=require('./PrintReport');

function bulidmainmenuString() {
    var mainmenuString = '1. 添加学生' + '\n' +
        '2. 生成成绩单' + '\n' +
        '3. 退出' + '\n' +
        '请输入你的选择（1～3）：';
    return mainmenuString;
}


function main(){
   var inputnum= readlinesync.question(bulidmainmenuString());
        switch(inputnum) {
            case '1':
                add.addstudentAchieve();
                console.log(students[0].id);
                main();
                break;
            case '2':
                printReport();
                main();
                break;
            case '3':
               process.exit();
            default:
                console.log('没有找到命令！');
                break;
        }
}

main();