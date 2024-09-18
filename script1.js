const arr = [1, 2, 3, 4, 5];

// array resverse
arr.reverse(); // [5, 4, 3, 2, 1]

//  it will add 0 at the end of the array
arr.push(0);  // [5, 4, 3, 2, 1, 0]

// it will add 6 at the starting of the array
arr.unshift(6); // [6, 5, 4, 3, 2, 1, 0]

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Combine the arrays
let arr3 = arr1.concat(arr2); 


arr3.splice(arr3.indexOf(5), 1); // Removes the first 5

console.log(arr3);