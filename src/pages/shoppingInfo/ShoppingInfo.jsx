import React from 'react';
import FastLogo from '../../assets/images/shoppingInfo/fast delivary.png';
import TimeLogo from '../../assets/images/shoppingInfo/24 X7.png';
import PaySafLogo from '../../assets/images/shoppingInfo/secure_payment.png';


const ShoppingInfoPageComponent = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-sans p-6 sm:p-8 lg:p-12">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">Shopping Information</h1>
            <p className="text-gray-700 text-lg">Everything you need to know about shopping with us.</p>
          </header>
    
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <img src={FastLogo} alt="Shipping" className="w-[250px]  mb-4 object-cover"  />
              <h2 className="text-2xl font-semibold text-black mb-2">Fast & Reliable Shipping</h2>
              <p className="text-gray-600">Enjoy quick and reliable shipping options to get your products delivered on time.</p>
            </div>
    
            <div className="flex flex-col items-center">
              <img src={PaySafLogo} alt="Secure Payment" className="w-[250px]  mb-4 object-cover" />
              <h2 className="text-2xl font-semibold text-black mb-2">Secure Payment Options</h2>
              <p className="text-gray-600">Rest assured with secure and trusted payment methods for a smooth checkout experience.</p>
            </div>
    
            <div className="flex flex-col items-center">
              <img src={TimeLogo} alt="Customer Support" className="w-[220px]  mb-4 object-cover" />
              <h2 className="text-2xl font-semibold text-black mb-2">24/7 Customer Support</h2>
              <p className="text-gray-600">We're here to help! Reach out anytime for support and assistance.</p>
            </div>
          </section>
    
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 mb-4">We strive to provide the best shopping experience with:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Top-notch customer service and support.</li>
              <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>High-quality and reliable products.</li>
              <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Easy return and refund policies.</li>
            </ul>
          </section>
    
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">Customer Testimonials</h2>
            <p className="text-gray-600 mb-4">Hear what our happy customers have to say:</p>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-700 italic">"Go-Groove offers the best shopping experience! Fast shipping and excellent customer support. Highly recommended!"</p>
                <footer className="text-gray-600 mt-2">- Alex J.</footer>
              </blockquote>
              <blockquote className="border-l-4 border-yellow-500 pl-4">
                <p className="text-gray-700 italic">"I love the ease of shopping and the variety of products available. Will shop again for sure!"</p>
                <footer className="text-gray-600 mt-2">- Jamie R.</footer>
              </blockquote>
            </div>
          </section>
    
     
        </div>
      );
};

export default ShoppingInfoPageComponent;
