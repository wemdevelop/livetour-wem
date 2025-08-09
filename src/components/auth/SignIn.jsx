import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, useNavigate } from 'react-router-dom' // ⬅️ Add useNavigate
import { ChevronRight, Eye, EyeOff } from 'lucide-react'
import google from '../../assets/img/credentials/googleLog.svg'
import facebook from '../../assets/img/credentials/facebookLog.svg'
import { signinSchema } from '../../schema/validationSchema'
import ScrollSlideLeft from '../ui/ScrollSlideLeft'

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)



    const navigate = useNavigate() // ⬅️ Init navigate

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signinSchema)
    })

    const onSubmit = (data) => {
        console.log(data)
        // TODO: Add your real sign-in logic (API call)
        // If successful, redirect to home page
        navigate('/') // ⬅️ Redirect after validation success
    }

    return (
        <ScrollSlideLeft>
            <div className='flex flex-col gap-3 justify-center items-center w-full'>
                <h3 className='font-medium'>Sign in</h3>
                <div className="text-sm text-gray-600 font-medium">to access LivetourPRO</div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full items-center">
                    <div className="w-full">
                        <input
                            {...register('email')}
                            type="email"
                            placeholder="Email"
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

                    <div className="flex justify-end w-full">
                        <Link to="/frgot-password" className='text-blue-600 hover:underline text-sm font-medium'>Forgot password?</Link>
                    </div>

                    <button type="submit" className="btn-icon-hover-red w-full flex justify-center items-center gap-2">
                        Sign In <ChevronRight />
                    </button>

                    <div className="w-full relative text-center text-sm text-gray-500">
                        <hr className='text-gray-300 absolute top-[50%] w-full' />
                        <span className="w-full px-3 bg-white relative z-10">Sign in using</span>
                    </div>

                    <div className="flex flex-col md:flex-row w-full text-[12px] text-gray-500 font-medium justify-center gap-2">
                        <div className="w-full flex justify-center items-center p-2 rounded-3xl border border-gray-400 hover:bg-gray-100 cursor-pointer gap-2 hover:border-black">
                            <img src={google} alt="Google logo" className='w-6' />
                            Continue with Google
                        </div>
                        <div className="w-full flex justify-center items-center p-2 rounded-3xl border border-gray-400 hover:bg-gray-100 cursor-pointer gap-2 hover:border-black">
                            <img src={facebook} alt="Facebook logo" className='w-6' />
                            Continue with Facebook
                        </div>
                    </div>

                    <div className="text-xs md:text-sm text-gray-500 mt-5 flex gap-1 justify-center items-center">
                        Don't have a LivetourPRO account?
                        <Link to="/signup" className='text-blue-600 text-sm hover:underline font-medium'>Sign up now</Link>
                    </div>
                </form>
            </div>
        </ScrollSlideLeft>
    )
}

export default SignIn
