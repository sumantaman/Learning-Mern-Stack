import dotenv from 'dotenv';

dotenv.config()

const config ={
    MONGO_URI : process.env.MONGODB_URL,
    JWT_SECRET : process.env.SECRET_KEY,
    cloudinary:{
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.CLOUD_API_KEY,
        api_secret:process.env.CLOUD_API_SECRET
    }
}

export default config;