const { Sequelize } = require("sequelize");

// Supabase connection pool
const sequelize = new Sequelize(
  "postgres://postgres.nhuvgbvbxncijgajjvce:gadgetsAreFun!@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
);

// Test connection
sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
