export enum Environment {
  DEV = 'dev',
  PROD = 'prod',
}

export const PUBLIC_DIR = './public';
export const ENV = process.env.NODE_ENV || Environment.DEV;
export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/build2019';
