import * as Yup from 'yup';
import { validateInputEmail, validatePassword } from '../Utils/ValidateInput'

export const SignUpschema  = Yup.object().shape({
firstname: Yup.string().required('firstname is required'),
  lastname: Yup.string().required('lastname is required'),
  email: Yup.string().email('Email is invalid').required('Email is required').test('Email', 'accents not allowed', value => validateInputEmail(value)),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').test('one-uppercase character special character and a number', 'Password must contain at least one uppercase letter, one special character and one number', value => validatePassword(value)),
  
})

export const Loginschema  = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
})

export const Adminloginschema = Yup.object().shape({
  Admin_id: Yup.number().required('Admin id is required'),
  password: Yup.string().min(8).max(32).required('password is required'),
});

export const Adminforgetschema = Yup.object().shape({
  admin_id: Yup.number().required('Admin id is required'),
  new_password:  Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').test('one-uppercase character special character and a number', 'Password must contain at least one uppercase letter, one special character and one number', value => validatePassword(value)),
});

export const Userforgetschema= Yup.object().shape({
  email: Yup.string().email().required(),
  new_password:  Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required').test('one-uppercase character special character and a number', 'Password must contain at least one uppercase letter, one special character and one number', value => validatePassword(value)),
});

export const Addbookschema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  price: Yup.number().required()
});