// routes/orderRoutes.js
const express = require('express');
const OrderController = require('./order.controller');

const router = express.Router();

// Order routes
router.post('/submit', OrderController.submitOrder);
router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.patch('/orders/:id/status', OrderController.updateOrderStatus);

// Health check route
router.get('/health', OrderController.healthCheck);

module.exports = router;