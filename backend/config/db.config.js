module.exports = {
  // HOST: "containers-us-west-168.railway.app",
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.PASSWORD,
  DB: "healthy_thinking",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
