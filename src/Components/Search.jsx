import React from 'react'

const Search = () => {
    return (


        
    <div className=' bg-gray-100 flex flex-wrap justify-center'>

        <div className='flex flex-col bg-black  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/react.png" alt='error loading'/>
            
            <h2 className=' bg-white text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>React Developer</h2>

        </div>


        <div className='flex flex-col bg-black rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/angular.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300  hover:bg-gray-200 text-center pb-2  transition-all duration-500 text-black cursor-pointer px-2'>Angular Developer</h2>

        </div>

        <div className='flex flex-col bg-black  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/python.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Python Developer</h2>

        </div>


        <div className='flex flex-col bg-black  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-20 m-6' src="./images/android.png" alt='error loading'/>
            
            <h2 className=' bg-cyan-300 text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Android Developer</h2>

        </div>

        </div>
    )
}

export default Search;