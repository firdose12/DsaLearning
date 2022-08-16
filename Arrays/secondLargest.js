/* 

You are given an integer array A. 
You have to find the second largest element/value in the array or report that no such element exists.

Observation : first i sort the array , then i will check whether the element exists or not , if exist , i will return n - 2;

*/

let A = [2, 1, 2] ;
let n = A.length;
//sorting 
A.sort();
console.log(A);
console.log(n - 1)
