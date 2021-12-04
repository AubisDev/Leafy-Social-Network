import React from 'react'
import logo from '../../img/logo.png';

import Menu from './Menu'



const Navbar = () => {
    return (
        <div className='h-16 bg-white w-90pw m-auto'>
            <div className='h-full flex flex-row justify-evenly'>
                <button 
                    className='flex flex-row h-full justify-left'>
                    <img src={logo} alt='Logo Leafy' className='h-14 w-14' />
                    <p className='text-green-600 text-3xl font-semibold font-title relative top-1/2 transform -translate-y-1/2 '>Laefy</p>
                </button>
                <div className='flex justify-center items-center'>
                    <Menu/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
