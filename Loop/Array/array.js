// Array of numbers
var numbers = [10, 20, 30, 40, 50];
// Array of strings
var fruits = ["Apple", "Mango", "Banana"];
// Mixed array (numbers + strings)
var mixed = ["Hello", 100, "World", 200];
// Printing arrays
console.log("Numbers Array:", numbers);
console.log("Fruits Array:", fruits);
console.log("Mixed Array:", mixed);
// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Second number:", numbers[1]);
// Array operations
fruits.push("Orange"); // Add item
console.log("After push:", fruits);
fruits.pop(); // Remove last item
console.log("After pop:", fruits);
numbers[2] = 99; // Change value at index
console.log("Updated numbers:", numbers);
// Loop through array
console.log("Looping through fruits:");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
