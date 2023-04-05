import * as Yup from 'yup';


// Login
export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
});

// Login by number;
export const LoginByNumberSchema = Yup.object().shape({
  phone: Yup.string().required('Phone is required')
})

// Register 
export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First name required'),
  lastName: Yup.string().required('Last name required'),
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  password: Yup.string().required('Password is required'),
});

// ResetPassword
export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
});

// Verify Code
export const VerifyCodeSchema = Yup.object().shape({
  code1: Yup.string().required('Code is required'),
  code2: Yup.string().required('Code is required'),
  code3: Yup.string().required('Code is required'),
  code4: Yup.string().required('Code is required'),
  code5: Yup.string().required('Code is required'),
  code6: Yup.string().required('Code is required'),
});

// Review Movie

export const ReviewSchema = Yup.object().shape({
  rating: Yup.mixed().required("Rating is required"),
  review: Yup.string().required("Review is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
});