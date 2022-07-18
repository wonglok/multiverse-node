module.exports = ({ env }) => {
  return {
    // ...
    io: {
      enabled: true,
      config: {
        IOServerOptions: {
          cors: {
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE", "OPTION"],
          },
        },
        contentTypes: {
          message: "*",
          chat: ["create"],
        },
        events: [
          {
            name: "connection",
            handler: ({ strapi }, socket) => {
              strapi.log.info(`[io] new connection with id ${socket.id}`);
            },
          },
        ],
      },
    },
    // ...
  };
};
