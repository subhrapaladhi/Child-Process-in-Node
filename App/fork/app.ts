/*
@  childprocess.fork(modulePath, [args], {options})
*/

import * as childprocess from "child_process";
import path from "path";

const names = ["subhra", "ranjan", "pranav", "mahi"];

let child = childprocess.fork("forkchild.js", names);

child.on("exit", () => {
    console.log("child terminated");
})

child.on("error", (err) => {
    console.log(`error occured: ${err}`);
})
