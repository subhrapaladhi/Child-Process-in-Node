import fs from "fs";
import childprocess from "child_process";

let prog = "./long_run.out";

let longprocessout = fs.openSync("./logs/longprocessout.txt", "a");
let longprocesserr = fs.openSync("./logs/longprocesserr.txt", "a");

// stdio should not be pipe
let child = childprocess.spawn(prog,["subhra"], {detached: true, stdio: ["ignore",longprocessout, longprocesserr]});
child.unref();