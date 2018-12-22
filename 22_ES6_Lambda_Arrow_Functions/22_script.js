/* Arrow Functions
-> Arrow functions are the replacement for the normal functions
-> Arrow functions can be wriiten with the symbol '=>'
-> This is the shortcut notation for normal fns
->below are the examples..*/


// Normal Function 1
let greet = function (){
    console.log('helloo');
};
greet();

// Arrow Function
let greetMe = () => {
    console.log('veenaaa');
};
greetMe();

// Arrow Function 2
let wishMe = (name) => {
    console.log(`Good Morning ${name}`);
};
wishMe('veena');

//Arrow function 3
let printMe = (name,age) => {
    let msg = `Hello ${name} You Are Just ${age} Yrs Old`;
    return msg;
};
let theMsg = printMe('veena',22);
console.log(theMsg);

// Use Arrow Functions to loop through an array
let output = '';
let cars = ['Bmw','Audi','Indica','Rang rover','Rolls Royce','Ducati','ambargini'];
cars.forEach(function (car) {
    output += `${car.toUpperCase()}`;
});
console.log(output);

//Create an employee array
let employees = [
    {
        name: 'veena',
        age : 22,
        designation: 'software engg',
        active: true
    },
    {
        name: 'williams',
        age : 32,
        designation: 'project manager',
        active: false
    },
    {
        name: 'john',
        age : 56,
        designation: 'tech lead',
        active: true
    },
    {
        name: 'vennala',
        age : 22,
        designation: 'software',
        active: false
    },

];
let activeEmployees = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployees);

let inactiveEmployees = employees.filter((employee) => {
    return !employee.active;
});
console.log(inactiveEmployees);

let seniorEmployees = employees.filter((employee) =>{
    return employee.age >= 35;
    });
console.log(seniorEmployees);

let juniorEmployees = employees.filter((employee) =>{
    return employee.age < 35;
});
console.log(juniorEmployees);

