import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber: string;
  state: string;
  zip: string;
}

interface OrderData extends FormData {
  orderTotal: number;
  items: string;
  timestamp: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  orderId?: string;
  order?: any;
}

export const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const { firstName, lastName, streetAddress, state, zip } = formData;
    return !!(firstName && lastName && streetAddress && state && zip);
  };

  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (e) {
      e.preventDefault();
    }

    if (!validateForm()) {
      setSubmitMessage('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const orderData: OrderData = {
        ...formData,
        orderTotal: 8199,
        items: 'Silhouette No. 1 - Vermillion',
        timestamp: new Date().toISOString()
      };

      const response = await fetch('https://eclypse-backend.onrender.com/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage('Order placed successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          streetAddress: '',
          aptNumber: '',
          state: '',
          zip: ''
        });
      } else {
        setSubmitMessage(result.message || 'Error placing order. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitMessage('Error connecting to server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = (): void => {
    setFormData({
      firstName: '',
      lastName: '',
      streetAddress: '',
      aptNumber: '',
      state: '',
      zip: ''
    });
    setSubmitMessage('');
  };

  const isFormValid = validateForm();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <img
                src="/logo-1.jpg"
                alt="logo"
                className="w-full h-full object-cover"
              />
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Waitlist</a>
            <a href="#" className="text-gray-900 font-medium">Cart</a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg border-4 p-6">
          {/* Header with back button */}
          <div className="flex items-center mb-6">
            <ChevronLeft className="w-5 h-5 mr-2" />
            <h1 className="text-lg font-medium">Shipping Address</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <span className="font-medium">Add New Address</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </div>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter street address"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Apt Number
                    </div>
                    <input
                      type="text"
                      name="aptNumber"
                      value={formData.aptNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Apt #"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      State *
                    </div>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2">
                      Zip *
                    </div>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Zip code"
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-8 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !isFormValid}
                    className="px-8 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Saving...' : 'Save This Address'}
                  </button>
                </div>

                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-md ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  By placing your order, you agree to our company{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    Privacy policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-blue-600 underline hover:text-blue-800">
                    Conditions of use
                  </a>.
                </p>
              </div>

              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items - Silhouette No. 1 - Vermillion</span>
                  <span className="font-medium">7,999</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping and handling:</span>
                  <span className="font-medium">200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Before tax:</span>
                  <span className="font-medium">6,599</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax Collected:</span>
                  <span className="font-medium">1,400</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Order Total:</span>
                  <span className="text-xl font-bold">8,199</span>
                </div>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !isFormValid}
                className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
