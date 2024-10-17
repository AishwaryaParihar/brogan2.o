const mongoose = require("mongoose");

const transactionModel = new mongoose.Schema(
    {

        fullName: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
        },
        phoneNumber: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
            minlength: 10,  // Minimum length for phone number
            maxlength: 15,  // Maximum length for phone number
        },
        email: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
            lowercase: true,  // Store emails in lowercase
            validate: {
                validator: function(v) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);  // Basic email validation
                },
                message: props => `${props.value} is not a valid email!`
            }
        },
        address: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
        },
        city: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
        },
        state: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
        },
        pinCode: {
            type: String,
            required: true,  // Required field
            trim: true,  // Remove extra spaces
            minlength: 6,  // Minimum length for pin code
            maxlength: 7,  // Maximum length for pin code
        },
        paymentMethod: {
            type: String,
            enum: ['online', 'cod'],  // Enum for payment methods
            default: 'online',  // Default value
        },
        amount: {
            type: Number,
            required: true,  // Required field
            min: 0,  // Amount cannot be negative
        },
        items: [{
            productName: {
                type: String,
                required: true,  // Required field
                trim: true,  // Remove extra spaces
            },
            qty: {
                type: Number,
                required: true,  // Required field
                min: 1,  // Minimum quantity must be at least 1
            },
            price: {
                type: Number,
                required: true,  // Required field
                min: 0,  // Price cannot be negative
            },
        }],
        MUID: {
            type: String,
            required: true,  // Required field
        },
    transaction_id : {
        type:String,
        uniqui: true,
    },
    user_id:String,
    murchant_id : String,
    created_at : String,
    product_id:String,
    payment_id : String,
},{
    timestamps:true
}
)
const transactiondetails=mongoose.model("transaction", transactionModel)
module.exports = transactiondetails