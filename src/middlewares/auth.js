import verifyJWT from '../utils/jwt.js'

const auth =  async (req,res,next) =>{
const cookie = req.headers.cookie;
const authToken = cookie.split("=")[1];
try {
console.log(authToken)
await verifyJWT(authToken)
next();
} catch (error) {
    res.status(400).send("Unauthorized token")
}

}


export default auth;