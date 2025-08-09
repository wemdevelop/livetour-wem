import React from 'react';
import { X } from 'lucide-react'; // Optional: You can use Lucide or any icon library

const ModalForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white relative rounded-xl w-full max-w-md p-6">
        {/* X Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-center text-xl font-semibold mb-2">Get a free trial</h2>
        <p className="text-center text-sm text-gray-600 mb-4">Please fill the details below</p>

      <form className="space-y-3">
  <input className="w-full border rounded px-4 py-2" placeholder="Name" />
  <input className="w-full border rounded px-4 py-2" placeholder="Company" />
  <input className="w-full border rounded px-4 py-2" placeholder="Email" />
  <input className="w-full border rounded px-4 py-2" placeholder="Select Country" />

  <div className="flex gap-2">
    <input className="w-1/3 border rounded px-4 py-2" placeholder="ISD" />
    <input className="w-2/3 border rounded px-4 py-2" placeholder="Phone" />
  </div>

  <input className="w-full border rounded px-4 py-2" placeholder="Website" />
  <textarea className="w-full border rounded px-4 py-2" placeholder="Leave us a message..." />

<div className="flex justify-center">
  <button
    type="submit"
    className="bg-red-600 hover:bg-red-700 w-[200px] h-[45px] text-white  px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all duration-300"
  >
    SUBMIT
  </button>
</div>

</form>

      </div>
    </div>
  );
};

export default ModalForm;
