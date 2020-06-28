"use strict";
/*
@  childprocess.execfile(executablefile,[args],[callback])
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const childprocess = __importStar(require("child_process"));
const compiler = "g++";
const version = "-std=c++2a";
const out = "-o";
const infile = "./App/execfile/temp.cpp";
const outfile = "out.out";
let name = "subhra";
let printname = childprocess.execFile(compiler, [version, infile, out, outfile], (error, stdout, stderr) => {
    if (error) {
        console.log(`error occured\nName: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    if (stderr) {
        console.log("stderr: \n", stderr);
    }
    else {
        let executable = `./${outfile} ${name}`;
        let runner = childprocess.exec(executable, (error, stdout, stderr) => {
            if (error) {
                console.log(`error occured\nName: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
            }
            if (stderr) {
                console.log("stderr: \n", stderr);
            }
            if (stdout) {
                console.log("stdout: \n", stdout);
            }
        });
    }
});
