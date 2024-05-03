// reverseArry

function reverseArry(array){
    var arr=[];
    for(i=0; i<array.length;i++){
        arr[i]=array[(array.length-1-i)];
    }
    return arr;
}
console.log("This is reversed array: ")
console.log(reverseArry([1,2,3,4,5]))


// car object
let car ={
    brand:"TOYOTA",
    model:"Civic",
    year:"2024"
};

function carInfo(car){
    return `The ${car.brand} ${car.model} was manufactured in ${car.year}`;
}

console.log(carInfo(car));

// Higher-order function
function applyFunction(array, func) {
    return array.map(func);
}

//ftn multiply each element by 2
function multiplyBy2(x) {
    return x * 2;
}

const inputArray = [1, 2, 3];
const resultArray = applyFunction(inputArray, multiplyBy2);
console.log(resultArray); 
