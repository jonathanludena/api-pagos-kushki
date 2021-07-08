require("dotenv").config();
const app = require("./app");

app.listen(8080, () => {
  console.log("Backend listen on port 8080");
});
