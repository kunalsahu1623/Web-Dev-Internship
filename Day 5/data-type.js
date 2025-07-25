//string 
let name="Kunal"
console.log(name);

// let is keyword for variable declaration
// let variableName = value;

//number
let age=20;
console.log(age);
console.log("my age is "+ age);
console.log(`my age is ${age}`);
console.log("my age is",age);

//float
let height=5.6;
console.log(height);
// in C, printf("%f",height);

// javascript is dynamically typed language
// C,C++, java static typed language
// int age=20; string name="Kunal"; float height=5.6;
// in js, we just use let keyword to take any type of data value

//boolean
let isStudent=true;
console.log(isStudent);

// is js case sensitive?
let a=10;  // a in lower case variable
let A=20;  // A in upper case variable
console.log(a,A);  //10 20
// js is case sensitive language

//undefined
let x;  // variable is declared but not initialized
console.log(x);  //undefined

//null
let y=null;  // variable is declared and initialized with null value
console.log(y);  //null

// object data type
// let objectName = {key1: value1, key2: value2, ...};
let person = {
    name: "Kunal",age: 20,
    height: 5.6, isStudent: true,
    address: {
        city: "Delhi", state: "Delhi", pincode: 110001
    }
};
console.log(person);

let address= {
    "key1": "Hello",
    "key2": "World",
    "homeaddress":{"city": "Delhi"}, // value os object
    "officeaddress":{"city":"Mumbai"} // value is object
}
console.log(address);
console.log(address.homeaddress.city);  
// print city of homeaddress
console.log("my office city is "+ address.officeaddress.city);

// array data type' 
let myFriends= ["Mohit", "Rahul", "Amit", "Sahil"];
console.log(myFriends);
console.log(myFriends[0]);  //Mohit
console.log(myFriends[2]);  //Amit
// My best friend is Mohit & Rahul
console.log("My best friend are " + myFriends[0] + " & " + myFriends[1]); // using string concatenation
// OR
console.log(`My best friend are ${myFriends[0]} & ${myFriends[1]}`); // using template literals

// date data type
let today = new Date();
console.log(today);  // current date and time
let myDOB = new Date("2006-01-07");
console.log(myDOB);  // my date of birth
console.groupCollapsed("DOB year "+ myDOB.getFullYear());  // get year of my date of birth
console.log("DOB month "+ myDOB.getMonth()+1);  // get month of my date of birth (0-11)
console.log("DOB date "+ myDOB.getDate());  // get date of my date of birth (1-31)

onsole.log("my expression " + 1 + 5); // "my expression 1" + 5 -> my expression 15
console.log("my expression " + (1 + 5)); // "my expression " + 6 -> my expression 6
