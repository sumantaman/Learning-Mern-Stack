import dotenv from 'dotenv';

dotenv.config()

const config ={
    MONGO_URI : process.env.MONGODB_URL,
    JWT_SECRET : process.env.SECRET_KEY,
}

export default config;