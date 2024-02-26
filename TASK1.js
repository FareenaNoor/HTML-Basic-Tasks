function reverseArray(arr){
    let reverseArray=[];
    for(let i=arr.length-1; i>=0; i--){
        reverseArray.push(arr[i]);
    }return reverseArray;
}

let myArr=[3,4,5,6,7];
let returnArr=reverseArray(myArr);
console.log(returnArr);


//TASK 2
cars={
    brand: 'Toyota', model: 'Camry', year: 2022
}

    function carInfo(carObject) {
        return `The ${carObject.brand} ${carObject.model} was manufactured in ${carObject.year}.`;
      }
const newObj=carInfo(cars);
console.log(newObj);


//TASK 3
function applyFunction(arr, myfunc) {
    return arr.map(myfunc);}

  const arr1 = [1, 2, 3];
  const doubleArr = applyFunction(arr1, (i) => i * 2);
  console.log(doubleArr);  
  

