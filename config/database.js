module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env("DATABASE_URI", null),
      },
      options: {
        ssl: env.bool("DATABASE_SSL", true),
      },
    },
  },
});
