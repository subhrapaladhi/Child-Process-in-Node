"use strict";
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
/*
@  childprocess.fork(modulePath, [args], {options})
*/
const childprocess = __importStar(require("child_process"));
const names = ["subhra", "ranjan", "pranav", "mahi"];
// creating fork
let child = childprocess.fork("forkchild.js", names, { cwd: "./Build/fork/" });
// receiving message from child
child.on("message", (data) => {
    console.log(`parent received ${data}`);
});
// ----------------------------
// 
// sending message to child
let interval = setInterval(() => {
    child.send({ name: "subhra", age: 20, city: "agra" });
}, 1000);
setTimeout(() => {
    clearInterval(interval);
    // kill child process after 5 sec
    child.kill();
}, 5000);
// ----------------------------
child.on("exit", () => {
    console.log("child terminated");
});
child.on("error", (err) => {
    console.log(`error occured: ${err}`);
});
