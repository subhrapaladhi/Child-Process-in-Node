"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const child_process_1 = __importDefault(require("child_process"));
let prog = "./long_run.out";
let longprocessout = fs_1.default.openSync("./logs/longprocessout.txt", "a");
let longprocesserr = fs_1.default.openSync("./logs/longprocesserr.txt", "a");
// stdio should not be pipe
let child = child_process_1.default.spawn(prog, ["subhra"], { detached: true, stdio: ["ignore", longprocessout, longprocesserr] });
child.unref();
