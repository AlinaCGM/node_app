const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmitter();
