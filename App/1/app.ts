/*
q: Difference between stderr and error in nodejs

@: Error is an error object created by Node JS because it is having 
-  a problem executing your command Stderr is a standard output stream
-  that happens because something is wrong during execution -- that is 
-  Node JS has no trouble executing your command, it is your command 
-  itself throws the error.
*/


import * as childprocess from 'child_process';

// COMMANDS
const progs = {
    list: "ls",
    copy: "cp",
    folder: "mkdir"
};

// ls COMMAND: list files in directory
let list = childprocess.spawn(progs.list, ["-l"], {cwd: "pdd"});
list.stdout.on("data", (data) => {
    console.log(`data:\n${data}`);
})

list.stderr.on("data", (err) => {
    console.log(`error: ${err}`);
})

list.on("error", (err) => {
    console.log(`error occured: ${err}`);
})


// cp COMMAND: copy a file
let copy = childprocess.spawn(progs.copy,["./Build/app.js","./temp/appcopy.js"]);
copy.on("exit", () => {
    console.log(`copy process finished`);
})

copy.stderr.on("data", (err) => {
    console.log(`error: ${err}`);
})

copy.on("error", (err) => {
    console.log(`error occured: ${err}`);
})


// mkdir COMMAND: make a new directory(folder)
let makedir = childprocess.spawn(progs.folder, ["./temp1"]);

makedir.stderr.on("data", (err) => {
    console.log(`error: ${err}`);
})

makedir.on("error", (err) => {
    console.log(`error occured: ${err}`);
})