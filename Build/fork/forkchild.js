"use strict";
let data = process.argv.slice(2);
// sending messages to parent
let sayHello = function (names) {
    names.forEach((name) => {
        if (process.send) {
            process.send(`greetings ${name}`);
        }
    });
};
let interval = setInterval(() => {
    sayHello(data);
}, 1000);
setTimeout(() => {
    clearInterval(interval);
}, 5000);
// --------------------------
// 
// 
// receiving data from parent
process.on("message", (parentData) => {
    console.dir(parentData, { colors: true });
});
// --------------------------
