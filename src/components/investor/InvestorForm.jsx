import React, { useState } from 'react';
import {
  ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Upload, X,
} from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

import carbabimone from '../../assets/img/common/cardbo.png';
import ModalCommon from '../ui/ModalCommon';
import cardrimgOne from '../../assets/img/common/thankyou.png';
import { investorValidationSchema, resellerValidationSchema } from '../../schema/validationSchema';

const InvestorForm = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(investorValidationSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    setOpen(true);
    reset(); // clear form after submission
  };

  return (
    <div className="min-h-0 px-4 md:px-0 container mx-auto flex flex-col items-center justify-start pt-10 md:pt-20 pb-10">
      <div className="text-center mb-6 mt-2">
        <h2>We can be a perfect match!</h2>
        <p className="caption_text text-center max-w-3xl mx-auto mb-4 mt-5">
          Join LivetourPRO Reseller Program
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gray-100">
        {/* Left Contact Info */}
        <div className="order-2 md:order-none relative min-h-full w-3xl justify-between bg-black text-white rounded-r-3xl p-10 flex flex-col gap-10">
          <img src={carbabimone} className="object-contain absolute bottom-0 right-0" alt="" />
          <div className="flex flex-col gap-0 z-10">
            <div className="text-3xl font-medium">Contact Information</div>
            <div className="text-sm text-gray-300">Say something to start a live chat!</div>
          </div>
          <div className="flex flex-col gap-3 z-10">
            <div className="flex gap-2 text-sm"><Phone className="w-5" /> +91 9895758254</div>
            <div className="flex gap-2 text-sm"><Phone className="w-5" /> +971 564948046</div>
            <div className="flex gap-2 text-sm"><Mail className="w-5" /> info@livetourpro.com</div>
            <div className="flex gap-2 text-sm">
              <MapPin className="w-5" />
              <div>
                <div>World e Mart Pvt Ltd</div>
                <div>4th Floor, AGA Marvel, Stadium Link Rd, Kaloor</div>
                <div>Kochi, Kerala 682024</div>
              </div>
            </div>
            <div className="flex gap-2 text-sm">
              <MapPin className="w-5" />
              <div>
                <div>World e Mart - FZE</div>
                <div>Bank Street, P.O Box - 903</div>
                <div>Ajman, United Arab Emirates</div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 z-10">
            <div className="p-2 bg-white text-black rounded-full hover:text-red-600 cursor-pointer"><Instagram /></div>
            <div className="p-2 bg-white text-black rounded-full hover:text-red-600 cursor-pointer"><Facebook /></div>
            <div className="p-2 bg-white text-black rounded-full hover:text-red-600 cursor-pointer"><BsWhatsapp className="w-6 size-5" /></div>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full p-5 py-10 md:p-10 flex flex-col gap-4 justify-center">
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <input
                {...register('fullName')}
                placeholder="Full name"
                className={`p-3 border rounded-md focus:outline-none focus:border-black text-sm w-full ${errors.fullName ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <input
                {...register('email')}
                placeholder="Email address"
                className={`p-3 border rounded-md focus:outline-none focus:border-black text-sm w-full ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <input
                {...register('lastName')}
                placeholder="Last name"
                className={`p-3 border rounded-md focus:outline-none focus:border-black text-sm w-full ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <input
                  {...register('phone')}
                  placeholder="Phone number"
                  className={`p-3 pl-10 border focus:outline-none focus:border-black rounded-md text-sm w-full ${errors.phone ? 'border-red-500' : 'border-gray-400'}`}
                />
                <div className="absolute left-2 bottom-3 text-gray-400 text-sm">+91</div>
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            
          </div>

          <div>
            <input
  {...register('companyName')}
  placeholder="Company name (optional)"
  className="p-3 border rounded-md focus:outline-none focus:border-black text-sm w-full border-gray-400"
/>

          </div>

          

          <div>
            <textarea
              {...register('message')}
              placeholder="Message"
              className={`p-3 border rounded-md focus:outline-none focus:border-black text-sm w-full ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </div>

          <button type="submit" className="btn-icon-hover-red flex justify-center items-center mt-2">
            Submit <ArrowRight />
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <ModalCommon isOpen={open} onClose={() => setOpen(false)} size="sm" closeOnOutsideClick={true}>
        <div className="w-full h-full items-center bg-white flex">
          <div className="w-full flex flex-col gap-2 p-5">
            <div className="text-2xl font-medium">Thank You</div>
            <div className="text-sm text-gray-500">We've received your details and will get back to you shortly.</div>
          </div>
          <div className="w-full hidden lg:block h-full">
            <img src={cardrimgOne} className="h-full object-cover" alt="thank-you" />
          </div>
        </div>
      </ModalCommon>
    </div>
  );
};

export default InvestorForm;
