/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/

console.log('안녕하세요');
console.log('안녕하세요');
console.log('안녕하세요');

var result = 0;
console.time('duration_sum');

for(var i=0; i <= 1000; i++){
    result += i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

var Person = {name:"소녀시대", age : 20};
console.dir(Person);

if(proces)
