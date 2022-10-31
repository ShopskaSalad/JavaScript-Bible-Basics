// /**
//  * EXAMPLE 2
//  */

// const myArray = []

// myArray[0] = 'First Element'
// myArray[1] = 'Second Element'
// myArray.push('Third Element')


// console.log(myArray);

// /**
//  * EXAMPLE 3
//  */

// const myArray = [3, true, 'abc', {}]
 
// console.log(myArray);

// myArray[1] = 'New Value for second element'

// console.log(myArray);

// myArray[3].newProp = 10;

// console.log(myArray);

// /**
//  * EXAMPLE 4
//  * 
//  * Square bracket notation
//  */

//  const myArray = [true, null, 1, 2, 'abc']
//  console.log(myArray);

//  myArray.pop()

//  console.log(myArray);

//  myArray.shift()

//  console.log(myArray);

// /**
//  * EXAMPLE 5
//  * 
//  * Square bracket notation
//  */

// const myArray1 = [1, 2, 3]
// const myArray2 = [1, 2, 3]

// console.log(myArray1 === myArray2 );

// /**
//  * CHALLENGE 1
//  * 
//  * Add elements at the beginning
//  */

// const myArray = [true, null]

// myArray.unshift(10)
// myArray.unshift('Hello')

// console.log(myArray);

// /**
//  * CHALLENGE 1
//  * 
//  * Add elements at the beginning
//  */

// const myArray = [1, 2]

// myArray[10] = 'asd'
 
// console.log(myArray);

/**
 * CHALLENGE 3
 * 
 * Array of objects
 */

const arrayOfCars = [
    {
        carBrand: 'Toyo',
        price: 122
    },
    {
        carBrand: 'Toyota',
        price: 1221
    },
    {
        carBrand: 'Toyotaaaaaaa',
        price: 12211
    }
]

console.log(arrayOfCars);

const newCar = {
    carBrand: 'adsf',
    price: 12
}

arrayOfCars.push(newCar)

console.log(arrayOfCars);