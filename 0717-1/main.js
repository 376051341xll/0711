'use strict';

var array = [12, 3, 4, 6, 4, 8];

var a = [];

a.length = array.length;

for (var i = 0; i < array.length; i++) {

    let count = 0;

    for (var j = 0; j < array.length; j++) {

        if (array[i] > array[j] && i != j) {

            count++;

      }

    }

    a[count] = array[i];

}



console.log(a);
