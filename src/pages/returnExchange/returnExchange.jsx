import React from "react";
import refund  from  '../../assets/images/returnExchange/refund.png';
import returns from '../../assets/images/returnExchange/return_easy.png';
import support from '../../assets/images/returnExchange/support.png'


const ReturnAndExchangePageComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-sans px-6 py-8 sm:px-12 lg:px-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">
          Return & Exchange Policy
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto">
          We prioritize your satisfaction. Learn more about our hassle-free
          return and exchange process.
        </p>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Easy Returns Feature */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <img
            src={returns}
            alt="Easy Return"
            className="w-29 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Easy Returns
          </h2>
          <p className="text-gray-600 text-center">
            Return items effortlessly with our simple and user-friendly process.
          </p>
        </div>

        {/* Instant Refund Feature */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <img src={refund} alt="Refund" className="w-29 object-cover mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Quick Refunds
          </h2>
          <p className="text-gray-600 text-center">
            Receive your refunds promptly, ensuring complete peace of mind.
          </p>
        </div>

        {/* Support Feature */}
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <img
            src={support}
            alt="Customer Support"
            className="w-29 object-cover mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            24/7 Support
          </h2>
          <p className="text-gray-600 text-center">
            Our team is available round the clock to assist with your return and
            exchange queries.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          How the Process Works
        </h2>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Our streamlined process makes returning or exchanging an item
          effortless. Here's how it works:
        </p>
        <ul className="list-none grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="bg-white shadow-md rounded-md p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Step 1: Initiate Return
            </h3>
            <p className="text-gray-600">
              Log into your account and select the item you wish to return or
              exchange.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-md p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Step 2: Pack the Item
            </h3>
            <p className="text-gray-600">
              Securely pack the item in its original packaging, including all
              accessories and invoices.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-md p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Step 3: Schedule Pickup
            </h3>
            <p className="text-gray-600">
              Choose a convenient pickup time or drop the item at our nearest
              return center.
            </p>
          </li>
        </ul>
      </section>

      {/* Customer Testimonials */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          What Our Customers Say
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-yellow-500 pl-4">
            <p className="text-gray-700 italic">
              "The return process was incredibly smooth. I got my refund within
              48 hours!"
            </p>
            <footer className="text-gray-600 mt-2">- Sarah M.</footer>
          </blockquote>
          <blockquote className="border-l-4 border-yellow-500 pl-4">
            <p className="text-gray-700 italic">
              "Exchanging a product was hassle-free. The customer support team
              was very helpful!"
            </p>
            <footer className="text-gray-600 mt-2">- Ryan L.</footer>
          </blockquote>
        </div>
      </section>

    
    </div>
  );
};

export default ReturnAndExchangePageComponent;
