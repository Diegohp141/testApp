const { app } = require("./src/app");
const { db, Op, champion } = require("./src/db.js");

db.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});
