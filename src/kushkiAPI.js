const axios = require("axios").default;

const kushkiAPI = () => {
  let privateId = process.env.KUSHKI_ECUADOR_OTP_PRIVATE_MERCHANT_ID;

  return axios.create({
    baseURL: "https://api-uat.kushkipagos.com",
    headers: { "Private-Merchant-Id": privateId },
  });
};

module.exports = kushkiAPI;
