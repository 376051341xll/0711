'use strict';
let word='I have a pencil';
word=word.split(' ');
for(let i=0; i<word.length-1; i++){
    if (word[i].length>word[i+1].length)
        word[i+1]=word[i];
}
console.log(word[word.length-1]);
