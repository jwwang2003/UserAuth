import * as dotenv from 'dotenv';
dotenv.config();

export default {
  SERVER_PORT: process.env.SERVER_PORT ?? '',
  DATABASE_URL: process.env.DATABASE_URL ?? '',
  TOKEN_SECRET: process.env.TOKEN_SECRET ?? ''
}