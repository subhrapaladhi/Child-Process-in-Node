/*
@  childprocess.exec(command, {options}, {callback})
*/

import * as childprocess from "child_process";
import { error } from "console";
import { stdout, stderr } from "process";

let progs = {
    list: "ls",
    remove: "rm"
}

// rm COMMAND: remove folder/files
let rm = childprocess.exec(progs.remove + " -r temp", (error, stdout, stderr) => {
    if(error) {
        console.log(`error occured\nName: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    if(stderr) {
        console.log("stderr: \n", stderr);
    }
    if(stdout) {
        console.log("stdout: \n", stdout);
    }
});

// ls COMMAND: list directories
let list = childprocess.exec(progs.list + " -l ./", (error, stdout, stderr) => {
    if(error) {
        console.log(`error occured\nName: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    if(stderr) {
        console.log("stderr: \n", stderr);
    }
    if(stdout) {
        console.log("stdout: \n", stdout);
    }
})