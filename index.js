
//this piece of code it just here to declare the 2 arrays which is array 1 and array 2
let array1 = [[1, 2, 3], [100, 2, 1, 10]];
let array2=[
    [ 1,2,3,4,5 ],

    [ 1 , [ 2 ] , [ 3, [ [ 4 ] ] ],

    

    [ 5 , 6 ] ]

]


function arrayUnique1() {
  let joinedArray = [].concat(...array1);

let uniqueValues1 = [];

  for (let i = 0; i < joinedArray.length; i++) {
    //This condition checks whether the current element in joinedArray is
    //not already present in the uniqueValues array. The includes method returns
    //true if the element is found in the array, and the ! (logical NOT) operator 
    //negates it.
    if (!uniqueValues1.includes(joinedArray[i])) {
      uniqueValues1.push(joinedArray[i]);
    }
  } 
  
  

  console.log(uniqueValues1);
}



function arrayUnique2() {

    let joinedArray = array2[0].concat(...array2[1]);
  
     let uniqueValues2 = [];
     for (let i = 0; i < joinedArray.length; i++) {
        //This condition checks whether the current element in joinedArray is
        //not already present in the uniqueValues array. The includes method returns
        //true if the element is found in the array, and the ! (logical NOT) operator 
        //negates it.
        if (!uniqueValues2.includes(joinedArray[i])) {
          uniqueValues2.push(joinedArray[i]);
        }
      } 
      
   
    console.log(uniqueValues2);
  }


  arrayUnique2();
arrayUnique1();



// arrayUnique2();

