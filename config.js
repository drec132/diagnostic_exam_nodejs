const env = process.env;

module.exports = {
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'localuser',
    password: env.DB_PASSWORD || 'Password1@#',
    database: env.DB_NAME || 'practice_schema',
  };