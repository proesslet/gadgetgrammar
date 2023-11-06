const { Sequelize } = require("sequelize");

// Supabase connection pool
const sequelize = new Sequelize(process.env.SUPABASE_CONNECTION_STRING);

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
