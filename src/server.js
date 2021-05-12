/* eslint-disable quotes */
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
 const server = Hapi.server({
  port: 5000,
  // eslint-disable-next-line linebreak-style
  host: process.env.NODE_ENV !== "production" ? "localhost" : "172.31.24.22",
  routes: {
   cors: {
    origin: ["*"],
   },
  },
 });

 server.route(routes);

 await server.start();
 console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
