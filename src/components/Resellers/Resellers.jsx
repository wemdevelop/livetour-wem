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
import { resellerValidationSchema } from '../../schema/validationSchema';

const ResellersPage = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resellerValidationSchema),
  });

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => setImage(null);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setOpen(true);
    reset();
    setImage(null);
  };

  return (
    <div className="min-h-0 px-4 md:px-0 container mx-auto flex flex-col items-center justify-start md:px-4 pt-10 md:pt-20 md:pt-6 pb-10 ">
      <div className="text-center mb-6 mt-2">
        <h2>We can be a perfect match!</h2>
        <p className="caption_text text-center max-w-3xl mx-auto mb-4 mt-5">
          Join LivetourPRO Reseller Program
        </p>
      </div>

      <div className=" flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-3xl overflow-hidden bg-gray-100">
        {/* Left Contact Details */}
        <div className="order-2 md:order-none relative min-h-full w-3xl justify-between bg-black text-white rounded-r-3xl p-10 flex flex-col gap-3">
          <img src={carbabimone} className="object-contain absolute bottom-0 right-0" alt="" />
          <div className="flex flex-col gap-0">
            <div className="text-3xl font-medium">Contact Information</div>
            <div className="text-sm text-gray-300">Say something to start a live chat!</div>
          </div>
          <div className="flex flex-col gap-3">
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
          <div className="flex gap-5">
            <div className="p-2 bg-white text-black rounded-full hover:text-red-600 cursor-pointer"><Instagram /></div>
            <div className="p-2 bg-white text-black rounded-full hover:text-red-600 cursor-pointer"><Facebook /></div>
                        <div className="p-2 bg-white text-black rounded-full hover:text-red-600 cursor-pointer flex justify-center items-center"><BsWhatsapp className='w-6 size-5' /></div>
            
          </div>
        </div>

        {/* Right Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full p-5 py-10 md:p-10 flex flex-col gap-4 justify-center">
          <div className="flex-col-reverse md:flex-row  flex items-center gap-3 justify-center">
            <div className="flex flex-col w-full gap-4">
              <div>
                <input
                  {...register('fullName')}
                  placeholder="Full name"
                  className={`p-3 border rounded-md p-3 focus:outline-none focus:border-black text-sm w-full ${errors.fullName ? 'border-red-500' : 'border-gray-400'}`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 ">{errors.fullName.message}</p>}
              </div>
              <div>
                <input
                  {...register('email')}
                  placeholder="Email address"
                  className={`p-3 border rounded-md p-3 focus:outline-none focus:border-black text-sm w-full ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col">
                <div className="relative">
                <input
                  {...register('phone')}
                  placeholder="Phone number"
                  className={`p-3 pl-10 border p-3 focus:outline-none focus:border-black rounded-md text-sm w-full ${errors.phone ? 'border-red-500' : 'border-gray-400'}`}
                />
                <div className="absolute left-2 bottom-3 text-gray-400 text-sm">+91</div>
              </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}

              </div>
            </div>

            {/* Image Upload */}
            <div className="h-44 w-48 rounded-md outline outline-gray-400 relative overflow-hidden flex items-center justify-center">
              {!image ? (
                <label htmlFor="file-upload" className="cursor-pointer text-gray-400 hover:text-black flex flex-col max-h-20 items-center w-full h-full p-3 justify-center">
                  <Upload className="mb-2" />
                  <span className="text-xs">Upload Image</span>
                  <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                </label>
              ) : (
                <div className="relative w-full h-full">
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="w-full h-full">
                    <img src={image} alt="Preview" className="object-cover rounded-3xl w-full p-4 h-full" />
                  </motion.div>
                  <button onClick={handleRemove} type="button" className="absolute top-1 right-1 bg-white text-red-500 rounded-full p-1 hover:bg-red-100">
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <input
                {...register('website')}
                placeholder="Website URL"
                className={`p-3 border rounded-md p-3 focus:outline-none focus:border-black text-sm w-full ${errors.website ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>}
            </div>
            <div>
              <input
                {...register('address')}
                placeholder="Company address"
                className={`p-3 border rounded-md p-3 focus:outline-none focus:border-black text-sm w-full ${errors.address ? 'border-red-500' : 'border-gray-400'}`}
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
            </div>
          </div>

          <div>
            <textarea
              {...register('business')}
              placeholder="Tell us about your business"
              className={`p-3 border rounded-md p-3 focus:outline-none focus:border-black text-sm w-full ${errors.business ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business.message}</p>}
          </div>
          <div>
            <textarea
              {...register('message')}
              placeholder="Leave as a message"
              className={`p-3 border rounded-md p-3 focus:outline-none focus:border-black text-sm w-full ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button type="submit" className="btn-icon-hover-red flex justify-center items-center mt-2">
            Submit <ArrowRight />
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <ModalCommon isOpen={open} onClose={() => setOpen(false)} size="sm" closeOnOutsideClick={true}>
        <div className="w-full h-full items-center  bg-white flex">
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

export default ResellersPage;
