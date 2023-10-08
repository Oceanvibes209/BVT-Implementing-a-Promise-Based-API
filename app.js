 //Import the API function
 const fetchData = require('./api');

 // Example usage
 fetchData()
   .then(data => {
     console.log('Success:', data);
   })
   .catch(error => {
     console.error('Error:', error.message);
   });

 /*const fetchData = require('./api'): Imports the fetchData function from the api.js file. 
 The require function is used in Node.js to include external modules.

fetchData().then(data => {...}).catch(error => {...}): Calls the fetchData function. 
Since fetchData returns a Promise, you can use the then method to handle the successful resolution of the Promise and the catch method to handle any errors.

console.log('Success:', data): Outputs a success message to the console along with the fetched data.

console.error('Error:', error.message): Outputs an error message to the console if there is an error during the API call.

When you run node app.js, it executes the code in app.js, which imports and uses the fetchData function from api.js. 
The then block handles the successful resolution, and the catch block handles any errors. 
In this example, it should print a success message with the fetched data after a simulated delay. */