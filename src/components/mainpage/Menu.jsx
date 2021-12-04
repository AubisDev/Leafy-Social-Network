import React from 'react'


const Menu = () => {

    const buttonCss = 'px-4 rounded-md shadow-sm  group '

    return (
        <ul className='flex flex-row'>
            <li>
                <button className={`h-full ${buttonCss}`}>
                    <i className="far fa-comment-alt text-2xl text-gray-400 group-focus:text-yellow-300"></i>
                    <p className='text-sm text-gray-500 group-focus:text-yellow-300 '>Main</p>
                </button>
            </li>
            <li>
                <button className={`h-full ${buttonCss}`}>
                <i class="fas fa-users text-2xl text-gray-400"></i>
                    <p className='text-sm text-gray-500 group-focus:text-yellow-300'>Friends</p>
                </button>
            </li>
            <li>
                <button className={`h-full ${buttonCss}`}>
                    <i class="fas fa-search text-2xl text-gray-400"></i>
                    <p className='text-sm text-gray-500 group-hover:text-green-600 group-focus:text-yellow-300'>Find new people</p>
                </button>
            </li>
            <li>
                <button className={`h-full ${buttonCss}`}>
                    <i class="far fa-newspaper text-2xl text-gray-400"></i>
                    <p className='text-sm text-gray-500 group-hover:text-green-600 group-focus:text-yellow-300'>News</p>
                </button>
            </li>
        </ul>
    )
}

export default Menu
