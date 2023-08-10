const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8282;
const server = app.listen(PORT, () => {
  console.log("server is listening to PORT: ", PORT);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection, server shutting down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
process.on("SIGTERM", () => {
  console.log("SIGTERM, server shutting down");
  server.close(() => {
    console.log("Process terminated");
  });
});
