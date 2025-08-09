import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import backgroundImage from '../../assets/contacts/connectio.n.gif';
import skateboardImg from '../../assets/contacts/connectio.n.gif';
import india from '../../assets/contacts/india.png';
import uae from '../../assets/contacts/united-arab-emirates (1).png';

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Centered Heading */}
      <div className="text-center">
        <h2 className="">GET IN TOUCH</h2>
        <p className="caption_text  text-center max-w-3xl mx-auto mb-10 mt-5">
          We’d love to hear from you! We’re always working to get better.
        </p>
      </div>

      <div className="w-full max-w-[1350px] grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden ">
        {/* Left - India / UAE Info */}
        <div className="relative bg-cover bg-center bg-black">
          <div className="bg-black bg-opacity-80 w-full h-full p-10 md:p-12 text-white">
            <div className="space-y-10">
              {/* India Details */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  INDIA
                  <img src={india} alt="India Flag" className="w-6 h-6" />
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>World e Mart Pvt Ltd</strong><br />
                <a
  href="https://www.google.com/maps?q=AGA+Marvel,+Stadium+Link+Rd,+Kaloor,+Kochi,+Kerala+682024"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  4th Floor, AGA Marvel, Stadium Link Rd, Kaloor<br />
  Kochi, Kerala 682024
</a>

                </p>
                <div className="mt-3">
                  <p className="font-semibold">Sales / Accounts:</p>
                  <p>
                    <a href="tel:+914844618535" className="hover:underline text-gray-300 block">
                      +91 484-4618535
                    </a>
                    <a href="tel:+919895758254" className="hover:underline text-gray-300 block">
                      +91 9895758254
                    </a>
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Support:</p>
                  <a href="tel:+919895758254" className="hover:underline text-gray-300">
                    +91 9895758254
                  </a>
                </div>
              </div>

              {/* UAE Details */}
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  UAE
                  <img src={uae} alt="UAE Flag" className="w-6 h-6" />
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong>World e Mart - FZE</strong><br />
                  <a
  href="https://www.google.com/maps?q=Bank+Street,+Ajman,+United+Arab+Emirates"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:underline"
>
  Bank Street, P.O Box - 903<br />
  Ajman, United Arab Emirates
</a>

                </p>
                <div className="mt-3">
                  <p className="font-semibold">Phone:</p>
                  <a href="tel:+971564948046" className="hover:underline text-gray-300">
                    +971 564948046
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Image and Socials */}
        <div className="bg-red-500 flex flex-col items-center justify-center relative">
          <img
            src={skateboardImg}
            alt="Skater Graphic"
            className="w-[70%] object-contain mb-8"
          />
         <div className="absolute bottom-6 right-8 flex space-x-4">
  <a
    href="https://www.facebook.com/LivetourPro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="text-white hover:text-gray-400 text-xl" />
  </a>
  <a
    href="https://twitter.com/LivetourPro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter className="text-white hover:text-gray-400 text-xl" />
  </a>
  <a
    href="https://www.instagram.com/LivetourPro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-white hover:text-gray-400 text-xl" />
  </a>
  <a
    href="https://www.linkedin.com/company/LivetourPro"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn className="text-white hover:text-gray-400 text-xl" />
  </a>
</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
