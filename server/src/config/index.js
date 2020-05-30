require('dotenv').config();

module.exports = {
  server: {
    PORT: parseInt(process.env.PORT, 10),
  },
  db: {
    DB_NAME: process.env.DB_NAME,
    MONGO_URI: process.env.MONGO_URI,
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
