'use strict';
//var s=  require();
var mapnums = [
    { 'tag': '000', 'fbz': undefined },
    { 'tag': '001', 'fbz': 'whizz' },
    { 'tag': '010', 'fbz': 'buzz' },
    { 'tag': '100', 'fbz': 'fizz' },
    { 'tag': '011', 'fbz': 'buzzwhizz' },
    { 'tag': '101', 'fbz': 'fizzwhizz' },
    { 'tag': '110', 'fbz': 'fizzbuzz' },
    { 'tag': '111', 'fbz': 'fizzbuzzwhizz' }
];

function mapNumberToWords(num) {
    var str = num.toString();
    var Numstr = (num % 3 ? 0 : 1).toString() + (num % 5 ? 0 : 1).toString() + ((num % 7 ? 0 : 1)).toString();
    mapnums[0]['fbz'] = str;
    if (str.indexOf('3') > -1) return 'fizz';
    var num = mapnums.findIndex(function(element) {
        return element.tag == Numstr;
    });
    return mapnums[num].fbz;
}