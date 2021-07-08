require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Backend api-pagos-kushki, listen on port ${port}`);
});
