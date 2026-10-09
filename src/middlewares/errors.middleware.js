// runs when no route matched the request
export function notFound(req,res,next){
    res.status(404).json({
        error:{
            message:`Route ${req.method} ${req.originalUrl} not found`
        }
    })
}

export function errorHandler(err,req,res,next){
    const status=err.status ?? 500;
    if(status>=500) console.error(err);
    // full details go to log
    res.status(status).json({
        error:{
            message:status>=500 ? 'Internal Server Error': err.message
        }
    });
}