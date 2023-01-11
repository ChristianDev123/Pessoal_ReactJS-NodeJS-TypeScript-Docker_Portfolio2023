module.exports = {
  "development": {
    "username": "root",
    "password": "workDoc2023",
    "database": "portfolio2023",
    "host": "172.18.0.2",
    "dialect": "mysql",
    "port":"3306"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}
