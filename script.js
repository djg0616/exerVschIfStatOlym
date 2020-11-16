

//prelim 1
if (5 > 3) {
  console.log('is greater than');
}
//prelim 2
var str = "cat";
if (str.length === 3) {
  console.log('is the length');
}
//prelim 3
var cat = "cat";
var dog = "dog";
if (cat === dog) {
  console.log('same');
}
else {
  console.log('not the same');
}
//bronze 1
var person = {
  name: "Bobby",
  age: 12
};
if (person.age >= 18) {
  console.log(`${person.name} is allowed to go to the movie`);
}
else {
  console.log(`${person.name} is not allowed to go to the movie`);
}
//bronze 2
if (person.name.startsWith("B", 0)) {
  console.log(`${person.name} is allowed to go to the movie`);
}
else {
  console.log(`${person.name} is not allowed to go to the movie`);
}
//bronze 3
if (person.name.startsWith("B", 0) && person.age === 18) {
  console.log(`${person.name} is allowed to go to the movie`);
 }
else {
  console.log(`${person.name} is not allowed to go to the movie`);
}
//silver 1
///strictly = three equal signs we care about the type, no type checking between the number and string two equal signs
if (1 === "1") {
  console.log("strict");
}
else if (1 == "1") {
  console.log("abstract");
}
else {
  console.log("not equal at all");
}
// silver 2
if (1 <= 2 && 2 === 4) {
  console.log("yes");
}
else {
  console.log("no");
}

// gold 1
var str = "dog";
if (typeof str === "string"){
  console.log("true");
}
// gold 2
var str = "true";
if (typeof str === "boolean"){
  console.log("true");
}
else {
  console.log("false");
}
//gold 3
var item; // this variable has been created but it doesn't have a value so its undefined, so the if statement prints "undefined". If the variable doesn't exist your code wont compile and you'll get an error message
if (item === undefined) {
  console.log("undefined");
}
else {
  console.log("defined");
}
//gold 4
if ("s" > 12){
  console.log("yes");
}
else{
  console.log("false");
}

//gold 5
if ("a" > 1){
  console.log("yes");
}
else{
  console.log("false");
}

//gold 6
//ternery operater is another way of doing an if statement, sometimes preferred because they are faster to write and usually one line
var myNum = 13;
myNum % 2 === 0 ? console.log("even") : console.log("odd");

