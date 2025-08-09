import React from 'react';
import Swal from 'sweetalert2';

const ContactHelp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submit logic
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Query Submitted!',
        text: 'Thank you! We will get in touch with you soon.',
        confirmButtonColor: '#d33',
      });
    }, 300);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    >
      {/* Example Form Fields */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          rows="4"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">We usually respond within 1 business day.</p>
        <button
          type="submit"
          className="inline-flex items-center bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Submit Query
        </button>
      </div>
    </form>
  );
};

export default ContactHelp;
