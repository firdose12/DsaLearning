/* 
print the odd and even elements of array A in 2 separate lines.
*/

let A = [1 , 2 , 3 , 4 , 5];
let n = A.length;
for(let i = 0 ; i < n ; i++) {
    if(A[i] % 2 === 0 ){
        console.log(A[i] , "Even Elements")
    }
    console.log(A[i], "Odd Elements");
}