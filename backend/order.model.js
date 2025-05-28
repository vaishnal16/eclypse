  
// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  streetAddress: {
    type: String,
    required: true,
    trim: true
  },
  aptNumber: {
    type: String,
    trim: true
  },
  state: {
    type: String,
    required: true,
    trim: true
  },
  zip: {
    type: String,
    required: true,
    trim: true
  },
  items: {
    type: String,
    required: true
  },
  orderTotal: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Static methods for the model
orderSchema.statics.createOrder = async function(orderData) {
  const order = new this(orderData);
  return await order.save();
};

orderSchema.statics.getAllOrders = async function() {
  return await this.find().sort({ createdAt: -1 });
};

orderSchema.statics.getOrderById = async function(id) {
  return await this.findById(id);
};

orderSchema.statics.updateOrderStatus = async function(id, status) {
  return await this.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};

module.exports = mongoose.model('Order', orderSchema);