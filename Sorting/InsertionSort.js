// Sorting 

// Insertion sort is like we start the i iteration from i = 1 , and start comparing its left side element 
// if it is greather that that element then we make a right shift with that we get all the sorted in 
// the left side and un sorted in the left side 


let a = [5,1,3,2,0];
let n = a.length;
for( let i = 1; i < n ; i++){
     let j = i -1 ;
     let temp = a[i];
     while(j>=0 && a[j] > temp) {
        a[j+1] = a[j];
        j--; 
     }

    a[j+1] = temp;
}

console.log(a);

//output : [0, 1, 2, 3, 5] 

// Dry Run 


/*
-> [5,1,3,2,0];      ---> i = 1 ; j = 0 ; temp = 5 ; 5 > 1 ? Yes , so A[j + 1 ] = A[j] i.e [_, 5 ,3, 2, 0]; j--;
                                 j = -1 , j!> 0 so come out of while loop
                                 A[j + 1 ] = temp , j = 1 A[1] = 1 [1 , 5, 3 , 2, 0];

-> [1 , 5, 3 , 2, 0] ---> i = 2 ; j = 1 ; temp = 3 ; 5 > 3 ? so [1 , _ , 5 , 2 , 0];j--;
                                  j = 0 ; 1 > 3 ? No so come out of the loop , because once we know that we dont have to check other 
                                  elements since left side is sorted so obivoulsy others will also be 'No';
                                  Now , j is at 0 , so j+1 = temp , A[1] = temp i.e [1 , 3 , 5 , 2 , 0]
                              
-> [1 , 3 , 5 , 2 , 0] --> i = 3 ; j = 2 ; temp = 2 ; 5 > 2 ? Yes so [1, 3, _ , 5 , 0];j--
                                   j = 1 ; 3 > 2 ? Yes so [1 , _ , 3, 5, 0];j--;
                                   j = 0 ; i > 2 ? No so Come out of loop;
                                   A[0+1] = temp , [1,2,3,5,0];
                              
-> [1 , 2 ,3 ,5 ,0];   --> i = 4 ; j = 3 ; temp = 0 ; 5 > 0 ? Yes [1, 2 , 3 , _ , 5 ]; j--;
                                   j = 2 ; 3 > 0 ? yes so [1 , 2 , _ , 3 , 5 ] ; j--;
                                   j = 1 ; 2 > 0 ? yes so [1 , _ , 2 , 3 , 5] ; j--;
                                   j = 0 ; 1 > 0 ? yes so [_, 0 , 2 , 3 , 5] : j--;
                                   j = -1 , not enter the loop;
                                   A[-1+0] = temp ; [0, 1 , 2, 3 , 5 ] */

           