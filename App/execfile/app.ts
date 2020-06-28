/*
@  childprocess.execfile(executablefile,[args],[callback])
*/

import * as childprocess from "child_process";

const compiler = "g++";
const version = "-std=c++2a";
const out = "-o";
const infile = "./App/execfile/temp.cpp";
const outfile = "out.out";

let name = "subhra";

let printname = childprocess.execFile(compiler,[version, infile, out, outfile], (error, stdout, stderr) => {
    if(error) {
        console.log(`error occured\nName: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    if(stderr) {
        console.log("stderr: \n", stderr);
    }
    else {
        let executable = `./${outfile} ${name}`;
        let runner = childprocess.exec(executable, (error, stdout, stderr) => {
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
    }
})