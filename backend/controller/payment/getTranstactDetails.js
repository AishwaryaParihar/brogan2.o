 // Adjust the path as necessary

const transactiondetails = require("../../models/transactionModel");

// GET API to retrieve transaction details
const getTransaction= async (req, res) => {
  try {
    const { transactionId } = req.params; // Extract transaction ID from URL parameters

    // Find transaction by transaction ID
    const transaction = await transactiondetails.findOne({ transaction_id: transactionId });
  console.log("transactions",transaction)
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    return res.status(200).json(transaction); // Send the transaction details as a response
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error retrieving transaction details",
      success: false,
      error: error.message,
    });
  }
}

module.exports = getTransaction;
