const logger = (req, res,next) =>{
    const method = req.method;
    const route = req.originalUrl;

    console.log(`Method : ${method} Route : ${route}`)

    next();
}

export default logger;
