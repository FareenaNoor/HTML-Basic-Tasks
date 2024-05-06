const heading= "i am heading";
const number = 100;
const obj = {
    1: 0,
    2: 0,
    3: 0
};

console.log(`this is heading ${heading} ${JSON.stringify(obj)}`);
 const arr = [1,2,3,4,5,6,6];
 const obj1={
    name: "fareena",
    gender: "female",
    countrycode: 123,
    age: 23
 };

const newobj= obj1;

newobj.name="zahid";
obj1.age=100;
console.log(`this is new obj${JSON.stringify(newobj)}`);
console.log(`this is new obj${JSON.stringify(obj1)}`);

const arr1=[1,2,3,4,5];
const arr2=arr1;
console.log(`this is new arr1${JSON.stringify(arr1)}`);
console.log(`this is new arr2${JSON.stringify(arr2)}`);
function greet(name = 'World', ...languages) {
    console.log(`Hello, ${name}!`);
    console.log('Languages:', ...languages);
    }

console.log(greet());
console.log('Starting setTimeout example...');
setTimeout(() => {
console.log('This message will be displayed after 2 seconds.');
}, 5000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.');


function getData() {
    return new Promise((resolve, reject) => {
    
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    
    resolve(data);
    
    }, 2000); 
    });
    }
   
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });