// validationSchema.js (optional file)
import * as yup from 'yup';

// su
export const signupSchema = yup.object({
  username: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  number: yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});


// si
export const signinSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});



// fp
export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
})




// src/validationSchema.js
import * as Yup from 'yup';

export const resellerValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
    .required('Phone number is required'),
  website: Yup.string().url('Invalid website URL').nullable(),
  address: Yup.string().required('Company address is required'),
  business: Yup.string().required('Tell us about your business'),
  message: Yup.string().required('Leave a message'),
});


export const investorValidationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
    .required('Phone number is required'),
  website: Yup.string().url('Invalid website URL').nullable(),
 companyName: Yup.string().nullable(),
  message: Yup.string().required('Message'),
});
