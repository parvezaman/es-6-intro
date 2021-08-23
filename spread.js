// AKA 3dots ...

const numbers = [0,1,2,3,4,5,6,7,8,9,99,44,56,4,2,58,475,21,75,1,5,752,74,2];
/* console.log(numbers);
console.log(... numbers); */

const max = Math.max(23,99,65);
const maxInArray = Math.max(numbers); 

//this is not working; because this function takes numbers not array. And to solve the problem we have to use spread that we can get only values (numberes in this case) out of the array

const maxInArray2 = Math.max(...numbers); 

console.log(max, maxInArray, maxInArray2);


// use of spread to copy values from one array to another without hapering the first array

// const numbers2 = [...numbers];
const numbers2 = [21, ...numbers, 53,59,61]; //erokom o possible
numbers.push(55);

console.log(numbers, numbers2);