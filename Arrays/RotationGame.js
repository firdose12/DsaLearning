/* 

Given an Array of size N , right rotate it by k steps and cannot use extra space.

lets take an example and understand 

say A = [ 3 , 2 , 9 , 6 , 5 , 8 ] and k = 3 

k = 1 ;  8 ,3 , 2 , 9 , 6 , 5
k = 2 ;  5 , 8, 3 , 2 , 9 , 6
k = 3 ;  6 , 5 , 8, 3 , 2 , 9

make a observation here , the last k items are coming to front 
lets think like this 

1 . Reverse entire Array   ->  8 , 5 , 6  , 9 , 2 , 3 
2.  Reverse from 0 to k - 1 -> 6 , 5 , 8 , 9 , 2 , 3
3 . Reverse from k - n - 1 -> 6 , 5 , 8 , 3 , 2 , 9

did we achieve :) ? yes , so simply we can do this , but what if k > n ? lets try by keep going with the flow 

k = 1 ;  8 ,3 , 2 , 9 , 6 , 5
k = 2 ;  5 , 8, 3 , 2 , 9 , 6
k = 3 ;  6 , 5 , 8, 3 , 2 , 9
k = 4 ;  9 , 6 , 5 , 8, 3 , 2 
k = 5 ;  2 , 9 , 6 , 5 , 8, 3 
k = 6 ;  3 , 2 , 9 , 6 , 5, 8 ----- we came back to original array , 

so after some iterations we ar again coming back to original array , so here k = 6 is matching with k = 0 , k = k % A.length 

 i.e k = 6 % 6 = 0 ; 

 say k = 8 , k = 8 % 6 = 2 , k = 2  , using modulus includes when k > n and k < n also.

*/ 

let A = [ 3 , 2 , 9 , 6 , 5 , 8 ];
let n = A.length;
let k = 3;
k = k % A.length;
function Reverse (A , L , R ){

let i = L ;
let j = R ;

while ( i < j ){
    let temp;
    temp = A[i];
    A[i] = A[j];
    A[j] = temp;
    i++;
    j--;
}

}


Reverse(A , 0 , n - 1);
Reverse(A , 0 , k - 1);
Reverse(A , k , n - 1);

console.log(A); // [6 , 5 , 8 , 3 , 2 , 9]

