const { format } = require("date-fns"); //we imported format
const { v4: uuid } = require("uuid"); //it generates id

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  try {
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
