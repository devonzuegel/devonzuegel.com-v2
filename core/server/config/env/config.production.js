module.exports = {
  database: {
    client: 'postgres',
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      port: '5432',
    },
  },
  paths: {
    contentPath: 'content/',
  },
  logging: {
    level: 'info',
    rotation: {
      enabled: true,
    },
    transports: ['file', 'stdout'],
  },
}
