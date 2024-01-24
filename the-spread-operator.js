/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1,2,3];
let arr2 = arr1.slice();
arr2.push(4);
//console.log("second array:", arr2, "first array", arr1);

// Copying an array
let arr3 = [...arr1];
arr3.push(4);
//console.log('First Array:', arr1, 'Third Array:', arr3);

// Copying an object
let obj1 = {a: 1, b: 2, c:3};
let obj2 = {...obj1, b: 4};
console.log('object1:', obj1, 'object2:', obj2);

// Copying only part of an array/object
let arr4 = [...arr1, {...obj2}, "x", "y"];
console.log(arr4);
