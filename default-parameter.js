// in case you aren't provided with enough numbers of parameters then you will have NaN type of error. So you gotta solve it

// main function
function add(num1, num2){
    const total = num1 + num2;
    return total;
}

let result = add(11,22);
console.log(result);

// classical way to solve if they give you one parameter only| we use condition to assign the undefined value as 0; 
function add(num1, num2){
    console.log(num1, num2);
    if(num2 == undefined){
        num2 = 0;
    }
    const total = num1 + num2;
    return total;
}

result = add(11);
console.log(result);


// another classical way to solve the problem
function add(num1, num2){
    num2 = num2 || 0;
    const total = num1 + num2;
    return total;
}

result = add(13);
console.log(result);


// ES-6 way tp handle the issue
function add(num1, num2 = 0){
    const total = num1 + num2;
    return total;
}

result = add(15);
console.log(result);
