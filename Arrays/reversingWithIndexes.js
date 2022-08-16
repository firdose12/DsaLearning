/* 

Given start Index and End Idex , reverse from index s to index e 

*/

let C = [-3 , 4 , 2 , 8 , 7 , 9 , 6 , 2 , 10 ]
let s = 3 ;
let e = 7 ;

while(s < e ) {
    let temp;
    temp = C[s];
    C[s] = C[e];
    C[e] = temp;
    s++;
    e--;
}
console.log(C);
//Output : [-3 , 4 , 2 , 2 , 6 , 9 , 7 , 8 , 10]

