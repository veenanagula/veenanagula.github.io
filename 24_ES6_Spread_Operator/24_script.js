//spread operator ES6
/*let min = Math.min(423,234345,3545,3,4534,345346,44);
console.log(`Min: ${min}`);*/

//Use Spread operator to pass an array element as parameters to a fn
let array = [423,234345,3545,3,4534,345346,44];
let min = Math.min(...array);
console.log(`Min: ${min}`);

//Use Spread operator to add an array element in the middle of anothe array
/*let array1 = [30,40,50];
let array2 = [10,20,60,70];
console.log(array2);

let array1 = [30,40,50];
let array2 = [10,20,...array1,60,70];
console.log(array2);

let array1 = [30,40,50];
let array2 = [10,20,...array1,60,70];
let array3 = [...array2,80,90,100];
console.log(array3);*/

//Use spread operator to create a copy of an array
let array1 = ['html','css','java script'];
let array2 = [...array1];
console.log(array2);