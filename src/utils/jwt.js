import jwt from 'jsonwebtoken';
import config from './../config/config.js';


function createJWT(data){
    const token = jwt.sign(data, config.JWT_SECRET,{
        expiresIn:'1d',
    });
    return token;
}

const verifyJWT = async (authToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(authToken, config.JWT_SECRET, (error, data) => {
      if (error) {
        return reject(new Error("Invalid or expired token")); // always reject with real Error object
      }
      if (!data) {
        return reject(new Error("No token data found")); // just in case
      }
      resolve(data);
    });
  });
};


export default {
    createJWT,
    verifyJWT
};