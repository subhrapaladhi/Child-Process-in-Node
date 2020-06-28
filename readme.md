# Child processes in Node js

## <u>[spawn](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)</u>
### child_process.spawn(command[,args][,options]) 

spawn() method spawns a new process using the given command, with command line arguments in args. If omitted, args defaults to an empty array.

## <u>[exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)</u>
### child_process.exec(command[,options][,callback])

Spawns a shell then executes the command within that shell, buffering any generated output. The command string passed to the exec function is processed directly by the shell and special characters (vary based on shell) need to be dealt with accordingly.

## <u>Difference between spawn() and exec()</u>
- [Child Process in Node.Js](https://www.brainbell.com/javascript/child-process.html#:~:text=The%20difference%20between%20spawn%20and,returns%20data%20as%20a%20buffer.)
- [Node.js Spawn vs. Execute](https://stackoverflow.com/questions/48698234/node-js-spawn-vs-execute)
- [Node.js: Difference between spawn and exec of child_process](https://www.hacksparrow.com/nodejs/difference-between-spawn-and-exec-of-node-js-child-rocess.html)


## <u>[execFile](https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback)</u>
### child_process.execFile(file[, args][, options][, callback])
The child_process.execFile() function is similar to child_process.exec() except that it does not spawn a shell by default. Rather, the specified executable file is spawned directly as a new process making it slightly more efficient than child_process.exec().

## <u>[fork](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)</u>
### child_process.fork(modulePath[, args][, options])
The child_process.fork() method is a special case of child_process.spawn() used specifically to spawn new Node.js processes. Like child_process.spawn(), a ChildProcess object is returned. The returned ChildProcess will have an additional communication channel built-in that allows messages to be passed back and forth between the parent and child.