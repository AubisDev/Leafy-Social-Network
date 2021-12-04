import { TextField } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import Divider from '@mui/material/Divider';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import googleLogo from './../../img/googleLogo.png';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../redux/actions/auth';
import { useSelector } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
        main: teal[500]
    },
  },
});

const RegisterForm = ({ setForm }) => {
    const dispatch = useDispatch();
    const { id }= useSelector(state => state.auth);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fullname:'',
            email: '',
            password: '',
            confirm: ''
          },
          validationSchema: Yup.object(validationSchema()),
          onSubmit: async(formData) => {
            await dispatch( startRegister( formData.fullname , formData.email, formData.password,) )
            if( id ){
                navigate("/home");
            }

          }
    });
    
    return (
        <div className='flex flex-col'>
            <button
                className='flex flex-row mb-8 py-3 items-center justify-center  bg-green-600 text-white hover:bg-green-800 animate__animated animate__fadeIn animate__slower '
            ><img src={googleLogo} alt='google logo' className='w-10 h-10 mr-2 p-2 bg-white ' /> Sign in with Google </button>
            <form 
                onSubmit={formik.handleSubmit}
                className='animate__animated animate__fadeIn animate__slower'
            >
                <ThemeProvider theme={theme}>
                <TextField
                    fullWidth
                    id="fullname"
                    name="fullname"
                    label="Fullname"
                    type="text"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                    sx={{ mb:2, boxShadow: 2 }}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    sx={{ mb:2, boxShadow: 2 }}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    sx={{ mb:2, boxShadow: 2 }}
                />
                  <TextField
                    fullWidth
                    id="confirm"
                    name="confirm"
                    label="Confirm password"
                    type="password"
                    value={formik.values.confirm}
                    onChange={formik.handleChange}
                    error={formik.touched.confirm && Boolean(formik.errors.confirm)}
                    sx={{ mb:2, boxShadow: 2 }}
                />
                </ThemeProvider>
                <button 
                    type='submit' 
                    className='bg-green-500 w-4/5 py-2 flex m-auto justify-center rounded-md shadow-lg text-white mb-5 hover:bg-green-600 transition duration-300' 
                >
                    Register now
                </button>
                <Divider/>

                <button 
                    className='mt-5 w-full m-auto text-green-600 hover:text-green-800 text-sm'
                    onClick={ () => setForm(true)}    
                >
                    Already have an account? Sign in here
                </button>
            </form>
        </div>
    )
}

export default RegisterForm


const validationSchema = () => {
   return {
    fullname: Yup.string().required(true).min(2,'Name must have at least 2 characters'),
    email: Yup.string().email(true).required(true),
    password: Yup.string().min(6,'Password should be at least 6 characters').required(true).oneOf([Yup.ref('confirm')]) ,
    confirm: Yup.string().required(true).oneOf([Yup.ref('password')]) 
   }
}