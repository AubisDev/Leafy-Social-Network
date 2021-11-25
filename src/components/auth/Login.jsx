import React, { useState } from 'react'
import Logo from '../../img/logo.png';
import 'animate.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Login = () => {

    const [form, setForm] = useState(true);

    return (
        <div className='h-screen w-screen flex flex-row'>
        <div className='h-full w-1/2 bg-gray-100'>
            <div className='w-1/2 flex m-auto relative top-1/2 transform -translate-y-1/2'>
                { form ?  <LoginForm setForm={ setForm }/> : <RegisterForm setForm={ setForm }/>}
            </div>
       </div>
       <div  
           className='h-full w-1/2 bg-gradient-to-r from-green-400 to-green-600 text-white'
       >
          <div 
               className='relative top-1/4'
           >
                <div className='flex flex-col text-6xl font-light'>
                    <img src={Logo} alt='logo' className='w-32 h-32 m-auto animate__animated animate__wobble animate__slow'/>
                    <p className='m-auto font-semibold -mt-3 animate__animated animate__fadeIn animate__slower'> Welcome to Leafy</p>
                </div>       
                <div className='w-1/2 m-auto  text-center mt-2 animate__animated animate__fadeInUp animate__slower'>
                <p>Connect and chat with your friends, share photos and videos, meet new people, react to the memes, much more</p>
                </div>
           </div>
       </div>
   </div>
    )
}

export default Login
