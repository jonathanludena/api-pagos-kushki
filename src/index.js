require("dotenv").config();
const app = require("./app");

app.listen(80, () => {
  console.log("Backend listen on port 8080");
});
