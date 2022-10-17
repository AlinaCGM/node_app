const { format } = require("date-fns"); //we imported format
const { v4: uuid } = require("uuid"); //it generates id

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log("hello");

console.log(uuid());
console.log();
