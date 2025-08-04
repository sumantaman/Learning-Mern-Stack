

import authServices from "../services/authServices.js";
import jwtUtils from '../utils/jwt.js';

const register_user = async (req,res)=>{
    const data = await authServices.register(req.body);
     const token = jwtUtils.createJWT(data)
        
        
        res.cookie("authToken", token,{
            maxAge : 86400*100
        })

       res.status(200).json({...data, token});
}


const login = async (req,res)=>{
    const input = req.body;
    try {
       if(!input.email){
        return res.status(400).json({message:"Email is required"});
       }
       if(!input.password){
        return res.status(400).json({message:"Password is required"});
       }
       const data = await authServices.login(input);
    //    generate token

        const token = jwtUtils.createJWT(data)
        const result = await jwtUtils.verifyJWT(token)
        console.log(result)
        
        res.cookie("authToken", token,{
            maxAge : 86400*100
        })

       res.status(200).json({...data, token});
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}
export default {register_user,login};




