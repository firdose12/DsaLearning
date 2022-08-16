console.log("find count atleast greater than itseld");


A = [-3,-2,6,8,4,8,5];
//find the maximum element
//find the duplciates in the array
//max - duplicate = actual count

//Obivously , if you find the max elemenet in the array , to do that you ll be iterating each
//every element in an array so , all the elements in the array will be atleast greater than
//max element.


//find the maximum element 
let max = -100000000;
let count = 0;
for ( let i = 0 ; i < A.length ; i++) {
    if(A[i] > max){
        max = A[i];
    }
}

//finding the duplicates
for(let i = 0 ; i <A.length ; i++) {
    if(max === A[i]){
        count++
    }
}

//final formula
console.log((A.length)-count);