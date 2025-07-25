let array= [1, 2, 3, 4, 5];
console.log("array length = " + array.length); // 5

let arraylength = array.length;

// for loop
// for (initialization; condition; increment/decrement) { }
for (let i = 0; i < arraylength; i++) {
    let element = array[i];
    console.log("Element at index " + i + " is: " + element);
}