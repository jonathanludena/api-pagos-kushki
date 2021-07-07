module.exports = async (req, res) => {
  console.log("Received GET", req);
  res.send(`<h1>Kushki Tech Test</h1>`);
};
