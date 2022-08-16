/* 

Given an array of integers A and multiple values in B, 

which represents the number of times array A needs to be left rotated.

Find the rotated array for each value and return the result in the from of a matrix where ith row represents the 

rotated array for the ith value in B.

Sample : 

A = [1, 2, 3, 4, 5]
B = [2, 3]

Output : 

 [ [3, 4, 5, 1, 2]
     [4, 5, 1, 2, 3] ]

     Make a Observation first , we have done the same in right rotation , here we have to do left rotation.
     i have made a observation like , first make reverse(0 , k -1 ) reverse ( k , n - 1 ) then revserse ( 0 , n- 1)
     try it out it will give you a format.

*/


let A = [1, 2, 3, 4, 5];
let n = A.length;
k = [2 , 3];
let B = [...A];
let C = [];
function reverse (A ,L ,R) {
    let temp;
    while(L < R) {
        temp = A[L];
        A[L] = A[R];
        A[R] = temp;
        L++;
        R--;
    }
}
for(let i = 0 ; i < k.length ; i++){
reverse(B , 0 , k[i]-1);
reverse(B , k[i] , n - 1);
reverse(B , 0 , n - 1);
C.push(B);
B = [...A];
}
console.log(C);
