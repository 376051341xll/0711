'use strict';

function isAllNum(inputStr) {
    let inputStrToNum = parseInt(inputStr);
    return inputStrToNum.toString() === inputStr;
}

function isCorrentStudentFormat(studentItemList) {
    if(studentItemList.length !== 8){
        return false;
    }
    for (let i = 4; i < studentItemList.length; i ++){
        let subjectItem = studentItemList[i].split(':');
        let subjectName = subjectItem[0];
        let subjectPoint = parseInt(subjectItem[1]);
        if(subjectItem.length !== 2) {
            return false;
        }else if(!(subjectName === 'Math' || subjectName === 'Chinese' || subjectName === 'English' || subjectName === 'Programing')){
            return false;
        }else if( !(isAllNum(subjectItem[1]) && subjectPoint >= 0 && subjectPoint <= 100)){
            return false;
        }
    }
    let newAllStudentObject = JSON.parse(storage.allStudentObject);
    for (let i in newAllStudentObject.allStudent){
        if(studentItemList[1] === newAllStudentObject.allStudent[i].stuID){
            return false;
        }
    }
    return true;
}

function isCorrentStuIDFormat(stuIDList) {
    if(!stuIDList.length){
        return false;
    }
    let hasExit = false;
    let newAllStudentObject = JSON.parse(storage.allStudentObject);
    for (let i in newAllStudentObject.allStudent){
        if(stuIDList[0] === newAllStudentObject.allStudent[i].stuID){
            hasExit = true;
            break;
        }
    }
    if(!hasExit){
        return false;
    }
    return true;
}

function buildTheStudent(studentItemList) {
    let theStudent = {
        name : '',
        stuID : '',
        nation : '',
        class : '',
        Math : 0,
        Chinese : 0,
        English : 0,
        Programing : 0,
        averPoint : 0,
        totalPoint : 0
    };
    theStudent.name = studentItemList[0];
    theStudent.stuID = studentItemList[1];
    theStudent.nation = studentItemList[2];
    theStudent.class = studentItemList[3];
    for (let i = 4; i < studentItemList.length; i ++){
        let subjectItem = studentItemList[i].split(':');
        let subjectName = subjectItem[0];
        let subjectPoint = parseInt(subjectItem[1]);
        if(subjectName === 'Math'){
            theStudent.Math = subjectPoint;
        }else if(subjectName === 'Chinese'){
            theStudent.Chinese = subjectPoint;
        }else if(subjectName === 'English'){
            theStudent.English = subjectPoint;
        }else if(subjectName === 'Programing'){
            theStudent.Programing = subjectPoint;
        }
    }
    theStudent.totalPoint = theStudent.Math + theStudent.Chinese + theStudent.English + theStudent.Programing;
    theStudent.averPoint = theStudent.totalPoint / 4;
    return theStudent;
}

function getStuItemByID(stuID) {
    let newAllStudentObject = JSON.parse(storage.allStudentObject);
    for (let i in newAllStudentObject.allStudent) {
        if (stuID === newAllStudentObject.allStudent[i].stuID){
            return newAllStudentObject.allStudent[i];
        }
    }
    return {};
}

function buildShowStudentList(stuIDList,showStudentList) {
    let newAllStudentObject = JSON.parse(storage.allStudentObject);
    for (let i in stuIDList){
        for (let j in newAllStudentObject.allStudent){
            if(stuIDList[i] === newAllStudentObject.allStudent[j].stuID){
                showStudentList.push(getStuItemByID(stuIDList[i]));
                break;
            }
        }
    }
}

function addStudentToLocalStorage(theStudent) {
    allStudentObject.allStudent.push(theStudent);
    storage.allStudentObject =  JSON.stringify(allStudentObject);
}


function addStudentToForm(theStudent) {
    let tbody = document.getElementById('tbody');
    tbody.innerHTML += `<tr>
                        <th scope="row"></th>
                        <td>${theStudent.name}</td>
                        <td>${theStudent.stuID}</td>
                        <td>${theStudent.Math}</td>
                        <td>${theStudent.Chinese}</td>
                        <td>${theStudent.English}</td>
                        <td>${theStudent.Programing}</td>
                        <td>${theStudent.averPoint}</td>
                        <td>${theStudent.totalPoint}</td>
                    </tr>`;
}

function showStudents(showStudentsList) {
    let showStudentsDiv = document.getElementById('showStudents');
    showStudentsDiv.innerHTML = `<table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>学号</th>
                        <th>数学成绩</th>
                        <th>语文成绩</th>
                        <th>英语成绩</th>
                        <th>编程成绩</th>
                        <th>平均分</th>
                        <th>总分</th>
                    </tr>
                </thead>
                <tbody id="tbody2">
                </tbody>
            </table>`;
    let showStudentsTable = document.getElementById('tbody2');
    for(let i in showStudentsList){
        showStudentsTable.innerHTML += `<tr>
                        <th scope="row"></th>
                        <td>${showStudentsList[i].name}</td>
                        <td>${showStudentsList[i].stuID}</td>
                        <td>${showStudentsList[i].Math}</td>
                        <td>${showStudentsList[i].Chinese}</td>
                        <td>${showStudentsList[i].English}</td>
                        <td>${showStudentsList[i].Programing}</td>
                        <td>${showStudentsList[i].averPoint}</td>
                        <td>${showStudentsList[i].totalPoint}</td>
                    </tr>`;
    }
}

function addStudent(event) {
    event.preventDefault();
    let studentStr = document.getElementById('studentItem').value;
    let studentItemList = studentStr.split(',');
    if (isCorrentStudentFormat(studentItemList)){
        let theStudent = buildTheStudent(studentItemList);
        addStudentToLocalStorage(theStudent);
        addStudentToForm(theStudent);
        alert('学生' + theStudent.name + '的成绩已添加成功');
        return false;
    }else {
        alert('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）');
        return false;
    }
}

function checkStudents(event) {
    event.preventDefault();
    let stuIDStr = document.getElementById('form2').value;
    let stuIDList = stuIDStr.split(',');
    if(isCorrentStuIDFormat(stuIDList)){
        let showStudentsList = [];
        buildShowStudentList(stuIDList,showStudentsList);
        showStudents(showStudentsList);
    }else {
        alert('请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,…）');
    }
}

let storage = window.localStorage;
storage.clear();
let allStudentObject = {allStudent : []};
storage.allStudentObject =  JSON.stringify(allStudentObject);


