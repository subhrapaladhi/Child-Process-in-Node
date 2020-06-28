/*
@  childprocess.fork(modulePath, [args], {options})
*/
import * as childprocess from "child_process";

const names = ["subhra", "ranjan", "pranav", "mahi"];

// creating fork
let child = childprocess.fork("forkchild.js", names,{cwd: "./Build/fork/"});

// receiving message from child
child.on("message", (data) => {
    console.log(`parent received ${data}`);
})
// ----------------------------
// 
// sending message to child
let interval = setInterval(() => {
    child.send({name: "subhra", age: 20, city: "agra"});
}, 1000)

setTimeout(() => {
    clearInterval(interval);
    // kill child process after 5 sec
    child.kill();
},5000)
// ----------------------------


child.on("exit", () => {
    console.log("child terminated");
})

child.on("error", (err) => {
    console.log(`error occured: ${err}`);
})
