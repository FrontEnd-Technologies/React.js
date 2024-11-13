let a = true;
let b = false;
let name = "Sam";

//after it finds the false value, it would not continue
console.log(b && name);
console.log("-------");
//after it finds the true value, it would continue
console.log(a && name);
console.log("-------");
//after it finds the false, it would stop there and would not proceed
console.log(a && b && name);

console.log("--------- || --------");
let c = true;
let d = false;
let name2 = (name) => {
  return name;
};

// doest not check the second condition if true
console.log(true || name2("Jami"));
// doest  check the second condition if falses
console.log(false || name2("Jami"));
console.log("-----------------------------------");
//Template literals
console.log("Template Literals");

const firstname = "First";
const lastName = "Last";

console.log(`${firstname} has a ${lastName}`);

console.log("-----------------------------------");
console.log("Ternary operator");
//condition ? a : b

const decision = false;
decision
  ? console.log(`${decision} is truthy`)
  : console.log(`${decision} is falsy`);
const decision2 = true;
decision2
  ? console.log(`${decision2} is truthy`)
  : console.log(`${decision2} is falsy`);

console.log("-----------------------------------");
console.log("Object and JSON Structuring and destructuring");
const id = 1;
const productName = "Product Apple Watch";
const rating = 6;

//if the key names matches with the variable
//then we dont need to write that,just write the key
const product = {
  id,
  productName,
  rating,
};
console.log(product);

console.log("Object Destructuring");
const product2 = {
  id2: "id2",
  productName2: "pd2",
  rating2: "rating2",
};
console.log(product2);
const { id2 } = product2;
console.log(id2);
console.log("array Destructuring");
let arrayExample = ["Sumaya", "Raha"];
const [one, two] = arrayExample;
console.log(one);
console.log(two);
console.log("-----------------------------------");
console.log("default parameters and spread and rest operators");
function multiplyTwo(one = 1, two = 2) {
  return one + two;
}
console.log(multiplyTwo(5, 5));
console.log(" spread and rest operators");
const arrayex = [2, 3, 4];
const arrayexTwo = [5, 6, 7];
// output:2 3 4
console.log(...arrayex);
//output:[ 2, 3, 4 ]
//creates a new array which is not gonna modify the original
//array
console.log([...arrayex]);
// to merge two arrays into one new array
console.log([...arrayex, ...arrayexTwo]);
// to merge two arrays into one new array and include some values
console.log(["javaed", "raha", ...arrayex, ...arrayexTwo]);
console.log(" spread operators as an argument");
//you will need to pass the spread operator and
//it stores as a array
// as an argunment at the end
function testing(a, b, ...c) {
  console.log(a, b, ...c);
}
testing(5, 6, "Sumaya", "Raha", "Sadia");

console.log("Important functions for the interview perspective and must know");
/*
map,filter,find,some every,includes, indexOf,findIndex
*/

console.log(
  "function: map helps to iterate the array of objects and returns the output as an array "
);

console.log("function: Map");
const countries = [
  { name: "USA", language: "ENGLISH" },
  { name: "BANGLADESH", language: "BANGLA" },
  { name: "RUSSIA", language: "RUSSIAN" },
  { name: "WEST BENGAL", language: "BANGLA" },
  { name: "UK", language: "ENGLISH" },
];
// OUTPUT:[ 'USA', 'BANGLADESH', 'RUSSIA' ]
const listLanguage = countries.map((country, index) => {
  return country.name;
});
console.log(listLanguage);
console.log("------------------------------");
console.log(
  "function: filer, helps to filer the array of objects and would return as an array"
);
// OUTPUT:[ 'USA', 'BANGLADESH', 'RUSSIA' ]
const englishCountires = countries.filter((country, index) => {
  return country.language == "ENGLISH";
});
console.log(englishCountires);
console.log("------------------------------");
console.log(
  "function: every, some, every would check if all the objects in the array is true, and some would check if any of the element matches with the criteria and would return a boolean value"
);

const allEnglish = countries.every((country, index) => {
  return country.language == "ENGLISH";
});
//OUTPUT: false
console.log(allEnglish);
const someEnglish = countries.some((country, index) => {
  return country.language == "ENGLISH";
});
//OUTPUT: true
console.log(someEnglish);

console.log("API Handling in JavaScript");

let handleAPI = async () => {
  try {
    const listOfProducts = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await listOfProducts.json();
    console.log(result);
  } catch {
    console.log("ERROR");
  }
};

handleAPI();
