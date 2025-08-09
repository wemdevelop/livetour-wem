import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { forgotPasswordSchema } from '../../schema/validationSchema' // ✅ import schema
import ScrollSlideLeft from '../ui/ScrollSlideLeft'

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(forgotPasswordSchema)
    })

    const onSubmit = (data) => {
        console.log('Reset Email Sent:', data)
        // You can send the email to API here
    }

    return (
        <ScrollSlideLeft>
        <div className='flex flex-col gap-3 justify-center items-center w-full relas'>
            <h3 className='font-medium'>Forgot Password?</h3>
            <div className="text-sm text-center w-80 text-gray-600 font-medium">
                Enter your email address and we'll send you a link to reset your password.
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full items-center">

                <div className="w-full">
                    <input
                        {...register('email')}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-2 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 transition"
                    />
                    {errors.email && (
                        <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="btn-icon-hover-red mt-3 w-full justify-center flex items-center gap-2"
                >
                    Submit <ChevronRight />
                </button>

                <div className="text-sm text-gray-500 mt-5 flex gap-1 justify-center items-center">
                    <Link to="/signin" className="text-blue-600 hover:underline font-medium">Back to Login</Link>
                </div>

            </form>
        </div>
        </ScrollSlideLeft>
    )
}

export default ForgotPassword
