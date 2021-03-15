import dotenv from "dotenv";
dotenv.config();

/** Object representing config on process.env */
export interface Env {
  NODE_ENV: "dev" | "prod";
  PORT: number;
  HOST: string;
}

/** Environment object */
export const env: Env = Object.assign({}, process.env) as any;

env.PORT = parseInt(env.PORT as any) || 5000;
env.HOST = env.HOST || "0.0.0.0";
env.NODE_ENV = env.NODE_ENV || "dev";
