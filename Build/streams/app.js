"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const child_process_1 = __importDefault(require("child_process"));
let prog = "ls";
// child using the stdio of the parent
// stdio : [stdin, stdout, stderr]
let err = fs_1.default.openSync("./logs/err.txt", "a");
let out = fs_1.default.openSync("./logs/out.txt", "a");
let child = child_process_1.default.spawn(prog, [], { stdio: ["ignore", out, err] });
