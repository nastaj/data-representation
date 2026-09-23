// 2a)
// Prints a string using arrow function assigned to printModule variable
const printModule = () => {
    console.log("Data Representation & Querying");
};

printModule();

// 2b)
// Prints a string specified by the user using arrow function
const printString = (string) => {
    console.log(string);
};

printString("Hello!")

// Prints a sum of two numbers using arrow function
// 2c)
const sum = (a, b) => {
    console.log(a + b);
}

sum(2, 2);

// 2d)
// Creates array of ages
const ages = [25, 31, 42, 77];

// Arrow function assigned to multiplyAges variable
const multiplyAges = () => {
    // Using map function and ternary operators, multiply numbers below 70 by 2
    return ages.map(num => (num < 70 ? num * 2 : num));
}

console.log(multiplyAges());