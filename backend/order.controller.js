// controllers/orderController.js
const Order = require('./order.model');

class OrderController {
  // Submit new order
  static async submitOrder(req, res) {
    try {
      const {
        firstName,
        lastName,
        streetAddress,
        aptNumber,
        state,
        zip,
        items,
        orderTotal
      } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !streetAddress || !state || !zip) {
        return res.status(400).json({
          success: false,
          message: 'Please fill in all required fields'
        });
      }

      // Create order data object
      const orderData = {
        firstName,
        lastName,
        streetAddress,
        aptNumber,
        state,
        zip,
        items: items || 'Silhouette No. 1 - Vermillion',
        orderTotal: orderTotal || 8199
      };

      // Create new order using model method
      const savedOrder = await Order.createOrder(orderData);

      res.status(201).json({
        success: true,
        message: 'Order placed successfully!',
        orderId: savedOrder._id.toString(),
        order: savedOrder
      });

    } catch (error) {
      console.error('Error saving order:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error. Please try again later.'
      });
    }
  }

  // Get all orders (admin)
  static async getAllOrders(req, res) {
    try {
      const orders = await Order.getAllOrders();
      res.json({
        success: true,
        message: 'Orders fetched successfully',
        orders
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching orders'
      });
    }
  }

  // Get single order by ID
  static async getOrderById(req, res) {
    try {
      const order = await Order.getOrderById(req.params.id);
      
      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }

      res.json({
        success: true,
        message: 'Order fetched successfully',
        order
      });
    } catch (error) {
      console.error('Error fetching order:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching order'
      });
    }
  }

  // Update order status
  static async updateOrderStatus(req, res) {
    try {
      const { status } = req.body;
      const validStatuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];
      
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status'
        });
      }

      const order = await Order.updateOrderStatus(req.params.id, status);

      if (!order) {
        return res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }

      res.json({
        success: true,
        message: 'Order status updated successfully',
        order
      });
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating order status'
      });
    }
  }

  // Health check
  static healthCheck(req, res) {
    res.json({
      success: true,
      message: 'Server is running properly',
      timestamp: new Date().toISOString()
    });
  }
}

module.exports = OrderController;