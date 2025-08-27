import { POOL } from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const pool = new POOL({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
})
export default pool;