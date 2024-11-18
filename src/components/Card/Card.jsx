import React from 'react'

const Card = ({children}) => {
    return <div className='md:w-[300px] w-[30%] flex flex-col items-baseline mb-[15px] md:mb-[30px] hover:scale-105 transition-all transform duration-300 shadow-lg hover:shadow-2xl rounded dark:shadow-blue-400 shadow-gray-500'>
     {children}   
    </div>
}

export default Card