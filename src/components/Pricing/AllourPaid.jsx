import React from 'react';
import { CheckCircle } from 'lucide-react';
import imgOne from '../../assets/img/features/pricedev.png'

const features = [
  '30-day dedicated onboarding service.',
  'Access to our bi-weekly webinars.',
  'Basic product training (Individuals / team members)',
  'Support through phone, email and live chat.',
  'Assistance with data import.',
];

const AllourPaid = () => {
  return (
    <div className="bg-[#efefee] py-12 px-4">
      
      <div className="max-w-6xl mx-auto overflow-hidden  rounded-3xl bg-white flex md:flex-row flex-col ">
        <div className="w-full flex flex-col p-5 md:p-16 gap-3 justify-center">
          <h3 className='mb-4'>All our paid plans include:</h3>
          <div className="flex items-center text-base font-medium gap-2">
            <CheckCircle className="text-red-600 mt-1 w-5 h-5" />30-day dedicated onboarding service.
          </div>
          <div className="flex items-center text-base font-medium gap-2">
            <CheckCircle className="text-red-600 mt-1 w-5 h-5" />
            Access to our bi-weekly webinars.
          </div>
          <div className="flex items-center text-base font-medium gap-2">
            <CheckCircle className="text-red-600 mt-1 w-5 h-5" />
            Basic product training (Individuals / team members)
          </div>
          <div className="flex items-center text-base font-medium gap-2">
            <CheckCircle className="text-red-600 mt-1 w-5 h-5" />
            Support through phone, email and live chat.
          </div>
          <div className="flex items-center text-base font-medium gap-2">
            <CheckCircle className="text-red-600 mt-1 w-5 h-5" />
            Assistance with data import.
          </div>

          <div className="text-xs font-normal text-gray-600 mt-3">Local taxes (VAT, GST, etc.) will be charged in addition to the prices mentioned.</div>
        </div>
        <div className="w-full bg-white flex justify-end">
          <img src={imgOne} className='w-96' alt="" />
        </div>
      </div>
    </div>
  );
};

export default AllourPaid;
