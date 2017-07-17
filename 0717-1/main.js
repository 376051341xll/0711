'use strict';
function suiji(){
    let random;
    let array=[0,1,2,3,4,5,6,7,8,9];
    array.sort(function(){ return 0.5 - Math.random() })
    var str= array.join();
    random=str.substring(0,7);
    random=random.split(',');
    for(let i=0;i<4;i++){
        random[i]=Number(random[i]);
    }
    return random;
  //  console.log(typeof random[1])
}

function Compare(random,user){
    let word=[];
    word.length=4;
    word[0]=0;
    word[2]=4;
    word[1]='A';
    word[3]='B';
    for(let i in random)
    for(let j in user) {
        if(random[i]==user[j] && i==j){
            word[0]++;
        }
        if(random[i]==user[j] && i==j){
            word[2]--;}
    }
    word=word.join();
    return word;
}

suiji();