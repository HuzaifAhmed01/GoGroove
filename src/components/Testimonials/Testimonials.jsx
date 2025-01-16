import React from 'react';
import img1 from '../../assets/images/testimonials/copy1.jpg';
import img2 from '../../assets/images/testimonials/copy2.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Holden Caulfield",
      role: "UI Developer",
      feedback:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      image: img1, // Replace with actual image URL
    },
    {
      name: "Alper Kamu",
      role: "Designer",
      feedback:
        "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.",
      image: img2, // Replace with actual image URL
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="text-gray-600 body-font py-24 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-300">
      <div className="container px-5 mx-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-900 mb-12">What Our Clients Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-full bg-white p-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:scale-105 w-full max-w-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-6 h-6 text-yellow-500 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed text-lg text-gray-600 mb-6">{testimonial.feedback}</p>
                <div className="flex items-center justify-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-16 h-16 rounded-full object-cover object-center border-4 border-yellow-500"
                  />
                  <div className="flex flex-col pl-4">
                    <span className="text-lg font-semibold text-gray-900">{testimonial.name}</span>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
