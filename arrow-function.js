// classical function
function add (num1,num2){
    return num1 + num2;
}

console.log(add(10,25));

// arrow function to add two numbers
const addInArrow = (num1,num2) => num1 + num2;

console.log(addInArrow(5,10));

// square a number using arrow function
const squared = (x) => x*x;
console.log(squared(5));


// give me any number i will multiply by 5 inshallah 
// 1 ta parameter er jnne () na dilew chlbe inshallah 
const multipliedBy5 = x => 5*x;

console.log(multipliedBy5(100));


// arrow function for multiple line function
const getOutput = (n1, n2) => {
    const sum = n1 + n2;
    const diff = n1-n2;
    const multi = sum * diff;
    return result = multi * 9;
}

console.log(`the final result is ${getOutput(10,5)} you can it manually if you want`);