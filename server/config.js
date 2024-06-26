import dotenv from "dotenv"

dotenv.config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"
export const PORT = process.env.PORT || 4000

export const CLOUDINARY = {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || "cloud_name",
    API_KEY: process.env.CLOUDINARY_API_KEY || "api_key",
    API_SECRET: process.env.CLOUDINARY_API_SECRET || "api_secret"
}