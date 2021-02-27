// PROBLEM 1
// Write a function that accepts one parameter - a name - and logs "Hello I am _____"
// Fill in the blank with the name given to the function
function hello(name){
    console.log("Hello I am " + name);
  }
  hello("Wendy");
  
  
  // PROBLEM 2
  // Modify this function accept two parameters, representing which numbers you want to multiply.
  // Then, add a code block that will multiply the two parameters and return the output.
  function multiply(num1, num2){
    return num1 * num2
  }
  const four = multiply(2, 2);
  if(four === 4){
    console.log("Multiplying works!");
  }else{
    console.log("Something's wrong with the multiply function.")
  }
  
  
  // PROBLEM 3
  // Write a function that accepts an array as a parameter
  // The function should loop through the given array and console.log each element in the array
  function Array(arr){
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
    }
  }
  Array(["gold", "silver", "bronze", "participation trophy"])
  
  
  // PROBLEM 4
  // Write a function that finds the maximum number in a given array
  // Loop through the array and keep track of the biggest number seen so far
  // Once the loop is over, return the biggest number in the array
  function findM(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
    }
    return max;
  }