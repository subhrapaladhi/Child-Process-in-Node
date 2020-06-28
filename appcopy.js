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
const childprocess = __importStar(require("child_process"));
const progs = {
    list: "ls",
    copy: "cp",
    folder: "mkdir"
};
// let list = childprocess.spawn(progs.list, ["-l"], {cwd: "pdd"});
// list.stdout.on("data", (data) => {
//     console.log(`data:\n${data}`);
// })
// list.stderr.on("data", (err) => {
//     console.log(`error: ${err}`);
// })
// list.on("error", (err) => {
//     console.log(`error occured: ${err}`);
// })
let copy = childprocess.spawn(progs.copy, ["./Build/app.js", "appcopy.js"]);
copy.on("exit", () => {
    console.log(`copy process finished`);
});
copy.stderr.on("data", (err) => {
    console.log(`error: ${err}`);
});
copy.on("error", (err) => {
    console.log(`error occured: ${err}`);
});
// let makedir = childprocess.spawn(progs.folder, ["./App/1"]);
// makedir.stderr.on("data", (err) => {
//     console.log(`error: ${err}`);
// })
// makedir.on("error", (err) => {
//     console.log(`error occured: ${err}`);
// })
