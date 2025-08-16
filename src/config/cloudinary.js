import {v2 as cloudinary} from 'cloudinary'
import config from './config.js';



function connectionCloudinary(){
     // Configuration
    cloudinary.config({ 
        cloud_name: config.cloudinary.cloud_name, 
        api_key:config.cloudinary.api_key, 
        api_secret: config.cloudinary.api_secret// Click 'View API Keys' above to copy your API secret
    });

}
export default connectionCloudinary