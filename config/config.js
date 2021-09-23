if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

module.exports =  {
  "development": {
    "username": process.env.USERNAME_DB_DEV,
    "password": process.env.PASSWORD_DB_DEV,
    "database": process.env.DATABASE_DEV,
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USERNAME_DB_DEV,
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable" :  process.env.DATABASE_URL,
    "dialectOptions" : {
      "ssl" : {
        "rejectUnauthorized" : false
      }
    }
  }
}
