// var myObject = {
//     a : 10
// }

// var copyOfMyObject = {
//     a : 'myObject'
// }

// copyOfMyObject.b = false

// console.log(myObject);
// console.log(copyOfMyObject);

let objectWithNestedObject = {
    nestedObject : {}
}

objectWithNestedObject.nestedObject.a = null
objectWithNestedObject.nestedObject.b = true

console.log('1'+objectWithNestedObject);
console.log('2'+objectWithNestedObject.nestedObject);
console.log('3'+objectWithNestedObject.nestedObject);
console.log('4'+objectWithNestedObject.nestedObject.a);
console.log('5'+objectWithNestedObject.nestedObject.b);