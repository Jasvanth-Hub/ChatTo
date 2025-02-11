const corsOptions = {
    origin: [
      "http://192.168.1.13:5173/",
      "http://localhost:5173",
      "http://localhost:4173",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  const CHATTO_TOKEN = "chatto-token";
  
  export { corsOptions, CHATTO_TOKEN };