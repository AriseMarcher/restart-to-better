"use strict";

var message = "Hello Babel";
console.log(message);
var foo = function foo() {
  console.log("foo function exec");
};
foo();
var obj = {
  name: "xiaoming",
  age: 18
};
var name = obj.name,
  age = obj.age;
console.log(name, age);