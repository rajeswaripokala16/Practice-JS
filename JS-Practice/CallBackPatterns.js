function doSomethingAsync(callback) {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const success = Math.random() > 0.5; // Randomly decide if it's a success or failure

    if (success) {
      callback(null, "Operation completed successfully!"); // No error, data is the message
    } else {
      callback("Error: Operation failed!", null); // Error, no data
    }
  }, 1000);
}

doSomethingAsync(function(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});