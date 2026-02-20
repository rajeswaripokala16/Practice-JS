function greet(name) {
  console.log('Hello, ' + name + '!');
}

function delayedGreeting(name, callback) {
  setTimeout(function() {
    callback(name); // Call the callback function after the delay
  }, 2000); // Wait 2 seconds (2000 milliseconds)
}

delayedGreeting('Alice', greet);
console.log('This message appears before the greeting!');