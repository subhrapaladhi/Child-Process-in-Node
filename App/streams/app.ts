import fs from "fs";
import childprocess from "child_process";

let prog = "ls";

// child using the stdio of the parent
// stdio : [stdin, stdout, stderr]

let err = fs.openSync("./logs/err.txt","a");
let out = fs.openSync("./logs/out.txt","a");
let child = childprocess.spawn(prog, [], {stdio: ["ignore", out, err]});