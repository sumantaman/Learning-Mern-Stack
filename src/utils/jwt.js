import jwt from 'jsonwebtoken';
import config from './../config/config.js';


function createJWT(data){
    const token = jwt.sign(data, config.JWT_SECRET,{
        expiresIn:'1d',
    });
    return token;
}

const verifyJWT = async (authToken) =>{
  return await new Promise((resolve, reject) => {
        jwt.verify(authToken,config.JWT_SECRET,(error,data)=>{
            if(error) return reject(error);
            return resolve(data);
        })
    })
}

export default {
    createJWT,
    verifyJWT
};