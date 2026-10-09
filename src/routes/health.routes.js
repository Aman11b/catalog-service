import { Router } from "express";
import config from "../config/index.js";

const router=Router();


// health check:used by clude run,load balancer and monitoring tools
router.get('/',(req,res)=>{
    res.status(200).json({
        status:'healthy',
        service:config.serviceName,
        uptime:process.uptime()
    });
});

export default router;