/* Destructing in ES6:
 Using this features instead of creating individual variables for each element of an array
 -> We can do this in a single line
 -> We can also this to swap b/w values
 -> We can also use this to create the new properties of an existing object properties.
  */

// Before Destructing Features
let student = ['veena',22,'engg'];
let sName = student[0];
let sAge = student[1];
let sCourse = student[2];
console.log(`Name: ${sName} Age: ${sAge} Course: ${sCourse}`);

// After Destructing Features ES6
let employee = ['veena', 12, 'engg'];
let [eName,eAge,eCourse] = employee;
console.log(`Name: ${eName} Age: ${eAge} Course: ${eCourse}`);

//swap the values of two variables
/*let a=10;
    b=20;
    console.log(`A: ${a} B: ${b}`);*/

    let a=10;
        b=20;
        temp=a;
        a=b;
        b=temp;
console.log(`A: ${a} B: ${b}`);

//with Destructing
 let x=10;
 let y=20;
 [x,y] = [y,x];
console.log(`x: ${x} y: ${y}`);

//Destructing with objects
let mobile = {
    color: 'black',
    brand: 'lenovo',
    capacity: '64gb'
};
let {color: nColor, brand:nBrand, capacity: nCapacity} = mobile;
console.log(`Color: ${nColor} Brand: ${nBrand} Capacity: ${nCapacity}`);


