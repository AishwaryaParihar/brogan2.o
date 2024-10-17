const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: String,
    brandName: String,
    category: String,
    productImage: [],
    availablesizes: [],
    unavailablesizes: [],
    description: String,
    price: Number,
    sellingPrice: Number,
    color: String
  },
  {
    timestamps: true,
  }
);
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
