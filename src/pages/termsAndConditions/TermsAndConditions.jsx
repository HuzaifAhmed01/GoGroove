import React from 'react';

const TermsAndConditionsComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-sans p-6 sm:p-8 lg:p-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-500 mb-2">Terms & Conditions</h1>
        <p className="text-gray-700 text-lg">Please read our terms and conditions carefully.</p>
      </header>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">By accessing our website, you agree to the following terms and conditions:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Agree to comply with all terms and conditions outlined herein.</li>
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Use of our website is at your own risk.</li>
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>We reserve the right to modify these terms at any time.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">User Responsibilities</h2>
        <p className="text-gray-600 mb-4">As a user, you agree to the following:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Provide accurate and current information.</li>
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Ensure compliance with all applicable laws.</li>
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Not engage in illegal or unethical activities.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">In no event shall we be liable for:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Indirect, incidental, or punitive damages.</li>
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Loss of profits or data.</li>
          <li><svg className="inline-block w-5 h-5 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 6.293a1 1 0 00-1.414 0L9 13.586 4.707 9.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"></path></svg>Use of our services or website.</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-black mb-4">Governing Law</h2>
        <p className="text-gray-600">These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our business is located.</p>
      </section>
     
    </div>
  );
};

export default TermsAndConditionsComponent;
