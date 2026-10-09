import express from "express"
import healthRoute from "./routes/health.routes.js"
import { notFound,errorHandler } from "./middlewares/errors.middleware.js"


export function createApp(){
    const app=express();

    app.use(express.json());

    app.use("/health",healthRoute);

    app.use(notFound);
    app.use(errorHandler);

    return app;
}