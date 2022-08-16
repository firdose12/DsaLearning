/*Prime Numbers are nothing but , which has exactly 2 factors i.e 1 and itself 
 we can say like if that number % i === 0 and if the count is exactly 2 then its a prime number

how do you if that number is factor of some other number , its should be divisible by it 

say 4 is factor of 24 ? 24/4 , the reminder should be zero i.e 24%4 === 0 ? then yes its a factor 

and one more observation , if a is factor of N then N/a is also a factor , how ? 

say 4 is factor of 24 then 24/4 = 6 is also a factor 

means its more or less like 6 * 4 = 24 and 4 * 6 = 24 , kind of repetation 

in one case a <= N/a , in the other case a >=N/a , take one 

a<=N/a => a^2 <=N , a < = root(N-1) , so i could say if there is a number which lies between 

why n-1 ? say we are saying if we have 2 factors in the range 1 to n then we call it as prime number , we can say this way 

also like if we have 0  factor in the range 2 to n-1 we can say its a prime number.

[2 , root(N)] then we can safely say that is not a prime number 

 */

console.log("Check whether it is a prime number or not");

function checkPrime(n) {
    for (let i = 2; i <= Math.sqrt(n - 1); i++) {
        if (n % i === 0) {
            return "its not a prime number";
        }
        else
            return "its a prime number";
    }
}

console.log(checkPrime(18));


