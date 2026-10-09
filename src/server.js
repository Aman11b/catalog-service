import { createApp } from "./app.js";
import config from "./config/index.js";


const server=createApp().listen(config.port,()=>{
    console.log(`
        ${config.serviceName} listening on port ${config.port} (${config.env})`);
});

// Cloud Run sends SIGTERM before stopping a container. Finish open requests, then exit.
for (const signal of ['SIGTERM','SIGINT']){
    process.on(signal,()=>{
        console.log(`${signal} received , shutting down gracefullt`);
        server.close(()=>process.exit(0))
    })
};



// A signal is a message the OS sends to a process. SIGTERM means “please stop,” and it’s what Cloud Run, Docker, and Kubernetes send. SIGINT is what Ctrl+C sends.

// Graceful shutdown means you stop accepting new requests, finish the in-flight ones, and then exit. Without it, users get errors every time Cloud Run scales down or deploys a new version.