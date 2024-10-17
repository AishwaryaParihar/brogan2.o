const axios = require("axios");
const crypto = require("crypto");
const transactiondetails = require("../../models/transactionModel");
// Adjust the path as necessary
const FRONTEND_URL = process.env.FRONTEND_URL;

const paymentStatus = async (req, res) => {
  let salt_key = process.env.SALT_KEY;
  const merchantTransactionId = req.query.id; // Get transaction ID from query parameters
  const merchantId = process.env.MERCHANT_ID;

  const keyIndex = 1;
  const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  // CHECK PAYMENT STATUS
  try {
    const response = await axios.request(options);
    
    if (response.data.success === true) {
      // Payment was successful
      const transactionData = response.data; // Assuming response.data contains the transaction details
      
      // Create a new transaction record in the database
      const newTransaction = new transactiondetails({
        fullName: transactionData.name, // Adjust based on actual response data structure
        phoneNumber: transactionData.mobileNumber, // Adjust based on actual response data structure
        email: transactionData.email, // Adjust based on actual response data structure
        address: transactionData.address, // Adjust based on actual response data structure
        city: transactionData.city, // Adjust based on actual response data structure
        state: transactionData.state, // Adjust based on actual response data structure
        pinCode: transactionData.pinCode, // Adjust based on actual response data structure
        paymentMethod: transactionData.paymentMethod || 'online', // Adjust based on actual response data structure
        amount: transactionData.amount / 100, // Assuming amount is in paise
        items: transactionData.items, // Adjust based on actual response data structure
        MUID: transactionData.merchantUserId, // Adjust based on actual response data structure
        transaction_id: merchantTransactionId, // Use the transaction ID from query parameters
        user_id: transactionData.user_id, // Adjust based on actual response data structure
        merchant_id: merchantId,
      });

      await newTransaction.save(); // Save the transaction details to MongoDB

      // Redirect to success page
      const url = `${FRONTEND_URL}/success`;
      return res.redirect(url);
    } else {
      // Payment failed
      const url = `${FRONTEND_URL}/failure`;
      return res.redirect(url);
    }
  } catch (error) {
    console.error("Error checking payment status:", error);
    const url = `${FRONTEND_URL}/failure`;
    return res.redirect(url); // Redirect to failure page in case of error
  }
};

module.exports = paymentStatus;
