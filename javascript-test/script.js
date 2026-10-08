//Section C - JavaScript Practical / Logical Questions

//1. Find all even numbers from the array

const numbers = [2, 4, 5, 6, 8, 10, 11, 13, 12, 14, 17];
let evennumbers = numbers.filter(n => n % 2 === 0)
console.log("all even numbers are :", evennumbers);

//2. Sort the array in ascending order

const numbers2 = [2, 4, 5, 6, 8, 10, 11, 13, 12, 14, 17, 1];
let sortednum = numbers2.sort((a, b) => {
    return a - b;
})
console.log("numbers sorted in ascending orger :", sortednum);

//3. Combine two arrays and remove duplicate values

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
let newarray = [...new Set(array1.concat(array2))];
console.log("new array after removing duplicates ", newarray);

//4. Find the last item of an array without hardcoding its index.

const fruits = ["Apple", "Banana", "Mango", "Orange"];
let lastfruit = fruits[fruits.length - 1];
console.log("the last item is:", lastfruit);

//5. Find the largest number in an array

const numbers3 = [10, 25, 7, 89, 45, 32];
let largestnum = Math.max(... numbers3);
console.log("the largest number is :", largestnum);

//6. Find the product with the highest price.

const products = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1200 },
    { name: "Watch", price: 800 },
    { name: "Bag", price: 1500 }
];
products.sort((a, b) => {
    return b.price - a.price;
})
let highestprice = products[0];
console.log("product with the highest price:", highestprice);

//7.  Filter products with a price greater than 500

const products1 = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1200 },
    { name: "Watch", price: 800 },
    { name: "Cap", price: 300 }
];

let filteredproducts = products1.filter(p => p.price > 500);
console.log("products with a price greater than 500", filteredproducts);

//8. Calculate the total price of all products.

const products2 = [
    { name: "Shirt", price: 500 },
    { name: "Shoes", price: 1200 },
    { name: "Watch", price: 800 }
];

let totalprice = products2.reduce((acc, p) => acc += p.price, 0);
console.log("total price of all products:", totalprice);

//9. Find a user by ID

const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
];
const userId = 2;
let finduser = users.find(u => u.id === userId);
console.log("user is:", finduser);

// 10. Remove an item from an array by ID

const users2 = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
];
const removeId = 2;
let removeduser = users2.filter(user => user.id !== removeId);
console.log("removed item from array:", removeduser);

//11. Reverse a string without using reverse().

const text = "hello";
let result = "";
for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
}

console.log("reverse string is :", result);

//12. Count how many times each value appears in an array

const fruits2 = ["apple", "banana", "apple", "orange", "banana", "apple"];
let myfruits = fruits2.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || + 0) +1;
    return acc;
},{})
console.log("each value appears in an array:",myfruits);

//13.  Check whether a word is a palindrome.

const word = "madam";
const mypalindrom = word.split().reverse().join();
console.log("the word 'madam' is palindrom:", mypalindrom == word);

//14. Find the second-largest number in an array.

const numbers4 = [10, 50, 30, 80, 60];
let secondlargest = numbers4.sort((a, b) => {
    return b - a;
})
console.log("second largest number is:", secondlargest[1]);

//15. Create a new array containing only the names of users.

const users3 = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
];

let newusers = users3.map(u => u.name);
console.log("the new array containing only the names of users:",newusers);



