/*In the MDN example the alarm() api async/await has some user inputs such as Name and Delay, the alarm function uses those values and set the name and delay imputed
from the user. If the delay is negative it will throw an error message and not run, but if its positive it will resolve and display the user name after
the alloted time delay the user also imputed, it can be 1 second or 1 min. After the alloted time the display message will appear. This will not execute
until the eventlistener registers the click from user which will then await the alarm function and its values, run the code and if it resolves display the
message. Otherwise it will catch if an error occurs. 

*/


/*Implementing a Promise-based API in JavaScript involves creating functions or methods that return Promises. 
Promises are a pattern for handling asynchronous operations in a more readable and manageable way. */

  //ChatGPT Lesson
  // Example API function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { message: 'Data fetched successfully' };

        //resolve(data); // Resolve the Promise with the fetched data

        // Uncomment the following line to simulate an error
        reject(new Error('Failed to fetch data'));
      }, 1000);
    });
  }
  
  // Export the fetchData function
  module.exports = fetchData;
  
/*function fetchData() {...}: Defines a function named fetchData that returns a Promise. 
This function simulates an asynchronous operation using setTimeout to mimic fetching data from an API.

return new Promise((resolve, reject) => {...}: Creates a new Promise. 
The resolve function is used to fulfill the promise with a successful result, and the reject function is used to reject the promise with an error.

setTimeout(() => {...}, 1000): Simulates an asynchronous operation that takes 1000 milliseconds (1 second). 
Inside the timeout function, a data object is created (const data = { message: 'Data fetched successfully' }).

resolve(data): Resolves the promise with the data object, simulating a successful API call. 
If you uncomment the reject line and comment out the resolve line, it would simulate a failed API call.

module.exports = fetchData: Exports the fetchData function, making it available for use in other files. 
This is a common pattern in Node.js to modularize code. */