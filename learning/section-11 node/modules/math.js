console.log("moduł główny");

const { add, des } = require("../components/add");

console.log(add);

const multiply = require("../components/multiply");

console.log(multiply);

const result = add(2, 4, 6);

console.log(result, des);
