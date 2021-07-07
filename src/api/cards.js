const kushkiAPI = require("../kushkiAPI");
const allowCors = require("../allowCors");

const handler = async (req, res) => {
  const token = req.body.token;
  const amount = req.body.amount;

  console.log(token, amount);

  if (!token || !amount) {
    return res
      .status(422)
      .send({ status: "error", message: "missing parameter(s)" });
  }

  return kushkiAPI()
    .post("/card/v1/charges", {
      token: token,
      amount: {
        subtotalIva: 0,
        subtotalIva0: amount,
        ice: 0,
        iva: 0,
        currency: "USD",
      },
      fullResponse: true,
    })
    .then((response) => {
      // Your own logic here...
      console.log(response.data);
      return res.send(response.data);
    })
    .catch((error) => {
      console.log(error.response);
      return res.status(422).send(error.response.data);
    });
};

module.exports = allowCors(handler);
