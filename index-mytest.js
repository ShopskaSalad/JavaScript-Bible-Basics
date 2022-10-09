// /**
//  * Section 1
//  */

// function myFunc(a,b) {
//     console.log(a);
//     console.log(b);

//     return 1
// }

// console.log(myFunc(5,6));


// // /**
// //  * Section 2
// //  */

// function mult(a, b, c) {
    
//     let d = a*b*c;

//     console.log(d);
// }

// mult(1,2,3)

// // /**
// //  * Section 3
// //  */

// function concatenateStrings(a, b) {
    
//     let c = a + b;

//     console.log(c);
// }

// concatenateStrings("Hello", "World")

// // /**
// //  * Section 4
// //  */

// function outerFunction(a, b) {
//     function innerFunction(c) {
//         return c*c;
//     }
//     c = a + b
    
//     var str = innerFunction(c)
//     console.log(str);
// }

// outerFunction(2,3)

// /**
//  * Section 5
//  */

var timer = 1;

const myInterval = setInterval(function(){
    console.log("Hello " + timer);
    timer = timer + 1
}, 2000)

setTimeout(function(){
    clearInterval(myInterval)
}, 10000)