const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("postgres", "postgres", "gadgetsAreFun!", {
//   host: "db.nhuvgbvbxncijgajjvce.supabase.co",
//   dialect: "postgres",
//   port: 5432,
// });

const sequelize = new Sequelize(
  "postgres://postgres.nhuvgbvbxncijgajjvce:gadgetsAreFun!@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
);

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

module.exports = sequelize;
