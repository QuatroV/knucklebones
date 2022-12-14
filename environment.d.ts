declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_HOST: string;
      DB_PORT: number;
      SECRET_KEY: string;
      SUPABASE_PUBLIC_KEY: string;
      SUPABASE_SERVICE_ROLE: string;
      SUPABASE_URL: string;
      SUPABASE_JWT: string;
    }
  }
}

export {};
