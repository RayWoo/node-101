const EventEmitter = require("events");

const customEmitter = new EventEmitter();
customEmitter.emit("response", "John", 34);
customEmitter.on("response", (name, id) => {
  console.log(`data recived user name ${name},ID:${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "John", 34);
console.log("======");
