import React from 'react';
import imgOne from '../assets/img/credentials/bgsection.svg';
import SignIn from '../components/auth/SignIn';

const Credentials = () => {
  return (
    <div
     className='h-screen w-full relative'
     style={{ backgroundImage: `url(${imgOne})` }}
    >

      <div className="flex h-full justify-center items-center">
        <div className="w-4xl flex bg-green-300 rounded-3xl">
            <div className="w-full p-10 flex flex-col gap-3">
                <SignIn/>
            </div>
            <div className="w-full">1</div>
        </div>
      </div>
    </div>
  );
};

export default Credentials;
