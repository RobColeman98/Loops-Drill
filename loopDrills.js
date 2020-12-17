//For Loop

let pizza = 4;

for (let i = 0; i < pizza; ++i) {
  console.log(pizza);
}

let i = 0;
let pizza = 7;

while (i < pizza) {
  // this will excute the loop "pizza" amount of times
  ++i;
  console.log(i);
}


// do while loop

let i = 0;
let anime = 10;
let watching = "";

do {
  watching += "t";
} while (i++ < anime);
console.log(watching);



//for in loops

let car = {
  make: "Chevrolet",
  model: "Camaro",
};

for (let i in car) {
//   console.log(i);
  console.log(car[i]);
}
// iterates a specified variable over the properties of an object



// for of Loop
let arr = [4, 5, 12];

// arr.fof = "Stop";

// for (let i in arr) {
//   console.log(i);
// }

for (let i of arr) {
    console.log(i)
}
// creates a loop that iterates over objects that are iterable like an array or map





