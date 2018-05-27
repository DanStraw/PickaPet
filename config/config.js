module.exports = {
    "development": {
      "username": process.env.DEV_USERNAME,
      "port": process.env.DEV_PORT,
      "password": process.env.DEV_PASSWORD,
      "database": process.env.DEV_DATABASE,
      "host": process.env.DEV_HOST,
      "define": {"timestamps": false},
      "dialect": process.env.DEV_DIALECT
    }
  }
  