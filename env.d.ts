declare global {
    namespace NodeJS {
      interface ProcessEnv {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
        ACCESS_TOKEN: string;
      }
    }
  }

  export {}