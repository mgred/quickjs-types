import { Worker } from "os";

//
// globals
//

scriptArgs.map((a) => a.toUpperCase());

const w = new Worker("filename");
w.postMessage(null);
w.onmessage = (data) => console.log(data);

Worker.parent = new Worker("filename");
