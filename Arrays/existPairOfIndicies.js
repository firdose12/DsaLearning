/*

Given an array of size n and an interger k , return true if there exist a pair of indicies  ( i , j ) where 
i ! = j and a[i] + a[j] == k 

why we are using j = i+1 below instead of j = 0 , okay lets draw a pairs with i = 0 and j = 0 

(0 , 0 ) (0 , 1 ) (0 , 2 ) (0 , 3 ) 
(1 , 0 ) (1 , 1 ) (1 , 2 ) (1 , 3 ) 
(2 , 0 ) (2 , 1 ) (2 , 2 ) (2 , 3 ) 
(3 , 0 ) (3 , 1 ) (3 , 2 ) (3 , 3 ) 

if you observe carefully , we should remove diagnol because i ! = j , and by removing it , a upper triange is formed
and a lower traingle is formed which are repeated , so simply we can take upper / lower trinage instead of again going 
from begining

(- , - ) (0 , 1 ) (0 , 2 ) (0 , 3 ) 
(1 , 0 ) (- , - ) (1 , 2 ) (1 , 3 ) 
(2 , 0 ) (2 , 1 ) (- , - ) (2 , 3 ) 
(3 , 0 ) (3 , 1 ) (3 , 2 ) (- , - )



*/

let a = [3 , -2 , 1 , 4 , 3 , 6 , 8];
let k = 10;
let n = a.length;
for(let i = 0 ; i < n ; i++ ) { 
    for(let j = i+1 ; j < n ; j++ ){
        if(i !== j ) {
            if(a[i] + a[j] === k ){
                console.log("Pair Exists" , a[i] + a[j]);
            }
        } 
    }
}

