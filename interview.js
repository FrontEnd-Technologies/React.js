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
