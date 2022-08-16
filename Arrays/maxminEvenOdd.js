/* 

You are given an array of integers A of size N.
Return the difference between the maximum among all even numbers of A and the minimum among all odd numbers in A.]

Sample 1 : 

A = [5, 17, 100, 1]
Output = 99 

even number = 100 , and max among even number is 100 
odd number = 1 , 5 , 17 , min among odd number is 1 , so 100 - 1 = 99

*/

let A = [0, 2, 9];
let n = A.length;
let max = -Infinity;
let min = Infinity;
for(let i = 0 ; i < n ; i++) {
    if(A[i] % 2 === 0 ){
        if(A[i] > max ) {
            max = A[i];
        }
    }
    else if(A[i] < min) {
        min = A[i];
    } 
}

console.log(max-min);