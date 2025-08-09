import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { ChevronRight, Eye, EyeOff } from 'lucide-react'
import google from '../../assets/img/credentials/googleLog.svg'
import facebook from '../../assets/img/credentials/facebookLog.svg'
import { signupSchema } from '../../schema/validationSchema' // ✅ your schema
import ScrollSlideLeft from '../ui/ScrollSlideLeft'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signupSchema)
  })

  const onSubmit = (data) => {
    console.log(data)
    // redirect or API call logic here
  }

  return (
    <ScrollSlideLeft>
    <div className='flex flex-col gap-3 justify-center items-center w-full'>

      <h3 className='font-medium'>Sign Up</h3>
      <div className="text-sm text-gray-600 font-medium">Start your 15-day free trial</div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full items-center">

        <div className="w-full">
          <input
            {...register('username')}
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          {errors.username && <p className="text-red-600 text-xs mt-1">{errors.username.message}</p>}
        </div>

        <div className="w-full">
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your mail"
            className="w-full p-2 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
          />
          {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="w-full relative">
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'} // 👈 toggle type
            placeholder="Enter your password"
            className="w-full p-2 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 pr-10"
          />
          <span
            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
          {errors.password && <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <div className="flex relative gap-2 items-center w-full  border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700">
          <div className="absolute px-2 text-gray-400 top-[8px]">+91</div>

          <div className="w-full">
            <input
              {...register('number')}
              type="number"
              placeholder="Enter your number"
              className="w-full pl-10 p-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700"
            />
            {errors.number && <p className="text-red-600 text-xs mt-1">{errors.number.message}</p>}
          </div>
        </div>

        <div className='w-full text-sm mb-2'>
          I agree to the <Link className='text-blue-700 hover:underline'>Terms of Service</Link> and <Link className='text-blue-700 hover:underline'>Privacy Policy</Link>
        </div>

        <button
          type="submit"
          className="btn-icon-hover-red w-full justify-center flex items-center gap-2"
        >
          Sign Up <ChevronRight />
        </button>

        <div className="w-full relative text-center text-sm text-gray-500">
          <hr className='text-gray-300 absolute top-[50%] w-full' />
          <span className="w-full px-3 bg-white relative z-10">or sign up using</span>
        </div>

        <div className="flex flex-col md:flex-row w-full text-[12px] text-gray-500 font-medium justify-center items-center gap-2">
          <div className="w-full flex justify-center p-2 rounded-3xl border hover:text-black hover:bg-gray-100 border-gray-400 hover:border-black transition-all duration-300 cursor-pointer items-center gap-2">
            <img src={google} alt="Google logo" className='w-6' />
            Continue with Google
          </div>
          <div className="w-full flex justify-center p-2 rounded-3xl border hover:text-black hover:bg-gray-100 border-gray-400 hover:border-black transition-all duration-300 cursor-pointer items-center gap-2">
            <img src={facebook} alt="Facebook logo" className='w-6' />
            Continue with Facebook
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-5 flex gap-1 justify-center items-center">
          Already have an account? <Link to={'/signin'} className='text-blue-600 hover:underline font-medium'>Sign in</Link>
        </div>

      </form>
    </div>
    </ScrollSlideLeft>
  )
}

export default Register
