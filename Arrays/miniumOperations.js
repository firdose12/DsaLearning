/* 

Little Ponny is given an array, A, of N integers. In a particular operation, he can set any element of the array equal to -1.

He wants your help in finding out the minimum number of operations required such that the maximum element of the

resulting array is B. If it is not possible, then return -1.


Sample : 

 A = [2, 4, 3, 1, 5]
 B = 3
 Output = 2

A = [1, 4, 2]
B = 3 
Output = -1

Observation : simplify the understaning of the question first , 

it simply says to find the whether B exits in the array and if exists find it as soon as it hits you

*/

// first find whether the element exists or not 
// Second we should get B as maximum so search for the elements until B becomes maximum

let A = [2, 4, 3, 1, 5];
let n = A.length;
let B = 3;
let flag;
let count = 0;
for(let i = 0 ; i < n ; i++){
    if(A[i] === B){
        flag = true;
    }
}

if(flag) {
    for (let i = 0 ; i < n ; i++) {
        if(B < A[i]) {
            count++;
        }
    }
}

if(count){
    console.log(count);
}
  else  console.log(-1)


