const axios = require("axios");
const FRONTEND_URL = process.env.FRONTEND_URL
require("dotenv").config();
const crypto = require("crypto");

const phonePePayment = async (req, res) => {
  try {
    const {
      transactionId, // Make sure your frontend sends this
      MUID,
      amount,
      fullName,
      phoneNumber,
    } = req.body;

    const merchant_id = "BROGANBOOTSUAT";
    const salt_key = "94f2c0cf-c52f-4c7a-ab6b-24414c8ff7d3";
     console.log("data",req.body)
    const data = {
      merchantId: merchant_id,
      merchantTransactionId: transactionId, // Use the ID from the form
      merchantUserId: MUID, // Merchant user ID from the form
      amount: amount * 100, // Amount should be multiplied by 100 for cents
      name: fullName, // Full name from the form
      redirectUrl: `${FRONTEND_URL}/api/status/?id=${transactionId}`,
      redirectMode: "POST",
      callbackUrl: "https://webhook.site/callback-url",
      mobileNumber: phoneNumber, // Phone number from the form
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    // Logging for debugging
    console.log(data);

    // Continue with the rest of the payment processing
    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString('base64'); // Use Buffer instead of btoa
    const keyIndex = 1;
    const string = payloadMain + "/pg/v1/pay" + salt_key;
    const sha256 = crypto.createHash("sha256").update(string).digest("hex");
    const checksum = sha256 + "###" + keyIndex;
    const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const options = {
      method: "POST",
      url: prod_URL,
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      data: {
        request: payloadMain,
      },
    };

    // Make the API call to PhonePe
    const response = await axios.request(options);
    console.log(response.data.data.instrumentResponse.redirectInfo);
    return res.json(response.data.data.instrumentResponse.redirectInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};




module.exports = phonePePayment;
