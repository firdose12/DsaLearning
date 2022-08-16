/* 

A number is a perfect number only if satisties like this N = a *  a , 

example 25 is a perfect number only if is 5 * 5

If N is a perfect power of 2 , then N = n ^ k;

 

*/

/* Given  a perfect square , find the square root of the number */

function checkPerfectNumber(n){
    for(let i = 0 ; i<= n ; i++){
        if( n === i * i ) {
            return "perfect Number"
        }
        else return "not a perfect number"
    }
}

let a = checkPerfectNumber(19);
console.log(a);


/* if N is a perfect power of 2 , then N  = 2 ^ k */

function checkPerfectPower(n) {

    for(let i = 0 ; i <= n ; i++) {
        if ( n == Math.pow(2 , i) ){
           return "its a perfect power of 2 ";
        }
        else 
        return "its not a perfect power of 2";
    }

}

let b = checkPerfectPower (4);
console.log(b);
