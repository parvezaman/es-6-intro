// template String, multiple line string and dynamic string

const anthem = 'amar sonar bangla';
const desherMati = "o amar desher mati tomar pore thekhai matha";
const ektiBangladesh = `ekti bangladesh tumi jagroto jonotar`;


const multiLine = 'this is first line \n' + 
'this is second line \n' + 
'this is thrid line';

console.log(multiLine);

const es6Multiline =`this is first line in es6
here goes second line
now third line`;

console.log(es6Multiline);



// dynamic string: encoding number with string 

const numbers = [0,1,2,3,4,5,6,7,8,9];
const count = 5;
console.log('i have' + count + 'friends');
console.log(`i have ${count} friends`); //es6
console.log(`i have ${numbers.length} numbers in my count`);