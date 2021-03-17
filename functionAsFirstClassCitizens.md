# FUNCTIONS AS FIRST CLASS CITIZENS IN JAVASCRIPT
Functions are the first class citizens in javaScript. In other words you can treat functions like values of other types.
The example below show how a function can be stored in a variable.

function addNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

let sumOfNumbers = addNumbers;

In the assignment statement, we didnt include the opening and closing parenthesis at the end of the add identifier. We also didnt execute the function but referencing the function itself.
It means that we have two ways to execute the function. We can call it normally as follows:

let result = addNumbers(10, 20);

let result = sumOfNumbers(10,20);

We can also pass a function into another function as arguments, for example;

function findTheAverageOfNumbers(parameterOne, parameterTwo, functionParameter) {
    return findTheMeanOfNumbers(parameterOne,         parameterTwo) / 2;
}

Now, you can pass the sumOfNumbers Function as argument into the findTheAverageOfNumbers function;

let result = findTheAverageOfNumbers(10, 30, sumOfNumbers);

Another property of Function is returning a function from another function.

function addAllNumbers(parameterOne, parameterTwo, functionParameter) {
  return functionParameter(parameterOne, parameterTwo) {
    parameterOne + parameterTwo;
  }
}

Second Class Citizens can only be bassed as argumemnts
