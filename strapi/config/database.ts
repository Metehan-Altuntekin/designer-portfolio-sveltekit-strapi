import { parse } from "pg-connection-string";
const config = parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host || env("DATABASE_HOST", "localhost"),
      port: config.port || env.int("DATABASE_PORT", 5432),
      database: config.database || env("DATABASE_NAME", "strapi"),
      user: config.user || env("DATABASE_USERNAME", "root"),
      password: config.password || env("DATABASE_PASSWORD", "password"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
