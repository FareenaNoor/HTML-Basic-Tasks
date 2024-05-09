// const myuser = {
//     name:'fareena noor',
//     pass: '123456789',
//     sKey: '1234',
//     passKey: 123,
//     email: 'fareena.gmail.com'
// };

// const{name, pass, ...rest}=myuser;
// console.log(name);
// console.log(pass);
// console.log(rest);

// const auther = myuser;

// auther.name="fareena";
// console.log(auther.name);

// console.log(myuser.name);


// console.log('Starting setTimeout example...'); setTimeout(() => {
//     console.log('This message will be displayed after 2 seconds.');
//     }, 2000);
//      // 2000 milliseconds = 2 seconds 
//     console.log('setTimeout example scheduled.');



// WEEK9


// sessionStorage.setItem(1,"fareena");
// localStorage===

// script.js

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const countDisplay = document.getElementById('count');

let count = parseInt(localStorage.getItem('count')) || 0;

decrementButton.addEventListener('click', () => {
  count--;
  countDisplay.textContent = count;
  localStorage.setItem('count', count);
});

incrementButton.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
  localStorage.setItem('count', count);
});

countDisplay.textContent = count;
