
function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = ["this is my promise i will do it"];
    // Simulating successful completion
    resolve(data);
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 5000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
console.log(getData());