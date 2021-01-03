## Conceptual Exercise

### Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    * Axios nesting >>> aios.get(url).then().catch()
    * Ajax/axios >>> async await
    * JQuery >>> await &.getJSON('url')

- What is a Promise?
    * A promise is always used during an asynchronous function. 
    * It is a one-time guarantee of future value & is what you'd receive if the program didn't run asynchronously
    * Using asynch funcitons, you await for the promise to be 'resolved', at which point you'd then get a return value (as a js object)

- What are the differences between an async function and a regular function?
    * Synchronous/regular functions are executed in sequence – each statement waits for the previous statement to finish before executing. 
    * Asynchronous code doesn’t have to wait – your program can continue to run while waiting for the asynch response. 

- What is the difference between Node.js and Express.js?
    * Node.js is an open-source back-end JavaScript environment that allows JS to run outside of a web browser (ie: A JS language that allows you to communicate with a server)
    * Express.js is a framework for Node (not js). Express is used to build web applications and APIs

- What is the error-first callback pattern?
    * Within node, when a callback function has either an error or success result, then the first callback argument will be 'error', followed by an argument needed for a successful response. This is usually refered to as 'data' >>> fs.readFile('/foo.txt', function(err, data) {});

- What is middleware?
    * Middleware is a function that runs in the 'middle' of a request/response cycle. It can be run prior to every route (app.use) or before select routes

- What does the `next` function do?
    * next is used to tell express that after the current funcion is ran, it should then look for the next applicable route/function. This is often used along with app.use or with a conventional route function when handling errors.  

- What does `RETURNING` do in Express? When would you use it?
    * At times you don't want the rest of the function to run, so you 'return' the function to stop it. -- You may also return next() to have express progress to the next applicable function/route

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
    * The function would be quicker if you ran parallel requests, rather than awaiting for each value one at a time. You can utilize Promise.all to run in parallel. 


```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
