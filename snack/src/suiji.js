var Information="xll,2015,han,23,yuwen:80,yingyu:80,hanyu:80,biancheng:80";
 var result=1;
for(var i=0; i<4;i++){
    console.log(typeof Information[i]);
    if(typeof Information[i] !== 'string'){
        result=0;
    }
}
for(var j=4;j<8;j++){
    console.log(typeof Information[j]);
    if(j%2==0 && typeof Information[j] != 'string'){
        result=0;
    }
    else if(j%2 !==0 && typeof  Information[j] !=='number'){
        result =0;
    }
}

console.log(Information);