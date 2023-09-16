// import * as Yup from 'yup';

// export const LoginSchema = Yup.object().shape({
//   email: Yup.string().required('Email is required').email('Invalid email'),
//   password: Yup.string()
//     .required('old Password is a required ')
//     .matches(
//       /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
//       `Password must contain at least one number,\none uppercase letter, and one special character`,
//     )
//     .min(8, 'old Password must be at least 8 characters'),
// });

// export const RegisterSchema = Yup.object().shape({
//   email: Yup.string().required('Email is required').email('Invalid email'),
//   password: Yup.string()
//     .required('old Password is a required ')
//     .matches(
//       /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
//       `Password must contain at least one number,\none uppercase letter, and one special character`,
//     )
//     .min(8, 'old Password must be at least 8 characters'),
//   fullName: Yup.string().required('FullName is required'),
//   number: Yup.string()
//     .max(10, 'Mobile number be at least 10 Numbers')
//     .required('Number is required'),
// });
