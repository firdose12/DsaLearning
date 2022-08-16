// Write a function that takes an integer and returns the number of 1 bits it has.

// 2 ways 1 . using toString(2) 2. custom calculation

//way 1 

let input = 11;
let convertTostringAndBinay = input.toString(2).split('');
let convertTostringAndBinayResult = convertTostringAndBinay.filter((value) => value > 0);
console.log(convertTostringAndBinayResult.length);

//way 2 : custom logic

// example : 25  = 11001

// 25/2 = 12   rem = 1
// 12/2 = 6    rem = 0
// 6/2  = 3    rem = 0
// 3/2  = 2    rem = 1
// 1/2  = 0    rem = 1

let num = 25;
const reminderResult = [];
while( num > 0 ){  
     let remainder = Math.floor(num % 2);
     reminderResult.push(remainder);
     num = Math.floor(num/2);
}

console.log(reminderResult.reverse());

