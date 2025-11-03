// TODO: Create a function called greet that takes a name parameter
// TODO: Make the greet function return "Hello, [name]!"
function greet(name)
    {
    return "Hello, " + name +"!"
    }

let user_name = "Joshua"
// TODO: Create a function called add that takes two parameters
// TODO: Make the add function return the sum of both parameters
function add(num1, num2)
    {
    return num1 + num2
    }

let first_number = 3
let second_number = 5
// TODO: Call both functions and store their results in variables
const greeting = greet(user_name)
const addition = first_number + " + " + second_number + " = " + add(first_number, second_number)
// TODO: Print the results to the console
console.log(greeting)
console.log("-".repeat(60))
console.log(addition)
