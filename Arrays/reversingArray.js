/* 

Given an array of size N , reverse the array without extra space 


*/

let C = [2 , 5 , 1 , 4 ];
let n = C.length;
let i = 0;
let j = n-1;


while(i < j ){
    let temp;
    temp = C[i];
    C[i] = C[j];
    C[j] = temp;
    i++;
    j--;
}


console.log(C);





