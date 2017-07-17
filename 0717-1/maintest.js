'use strict';

describe('test', function () {

    it('suiji number length', function() {
        let answer=4;
        var result = suiji();
        expect(result.length).toEqual(answer);
    });

    it('suiji number type', function() {
        let answer=0;
        let result=suiji();
        for(let i=0; i<result.length;i++){
            if(typeof result[i]!='number'){
                answer++
            }

        }
        expect(0).toEqual(answer);
    });

    it('suiji number no repeat', function() {
        let answer=0;
        let array2=suiji();
        let result=0;
        for(let i of array2)
        for (let j of array2){
            if(array2[i]==array2[j] && i!=j )
                result=1;
        }
        expect(result).toEqual(answer);
    });


    it('1234-1234', function() {
        let answer='4,A,0,B';
        var random = [1,2,3,4];
        var user = [1,2,3,4];
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-1243', function() {
        var random = [1,2,3,4];
        var user = [1,2,4,3];
        let answer='2,A,2,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-5678', function() {
        var random = [1,2,3,4];
        var user = [5,6,7,8];
        let answer='0,A,4,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-5612', function() {
        var random = [1,2,3,4];
        var user = [5,6,1,2];
        let answer='0,A,4,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-1256', function() {
        var random = [1,2,3,4];
        var user = [1,2,5,6];
        let answer='2,A,2,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-1256', function() {
        var random = [1,2,3,4];
        var user = [1,2,5,6];
        let answer='2,A,2,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });



});
