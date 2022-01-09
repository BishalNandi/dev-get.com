import React from 'react'

const Cards2 = () => {
    return (
        <div>
             <hr className="border-2 bg-green-500"/>
            <h1 className=' font-extrabold  px-20 py-4 bg-cyan-100 '>Popular Projects : 
            <button className='inline-block float-right  text-blue-700'>View all</button></h1>
            <div className=' bg-gray-100 flex flex-wrap justify-center'>

        <div className='flex flex-col bg-white  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-40 m-6' src="./images/calculator.png" alt='error loading'/>
            
            <h2 className=' bg-white text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Calculator</h2>

        </div>


        <div className='flex flex-col bg-black rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-40 m-6' src="./images/clock.png" alt='error loading'/>
            
            <h2 className=' bg-white  hover:bg-gray-200 text-center pb-2  transition-all duration-500 text-black cursor-pointer px-2'>Clock</h2>

        </div>

        <div className='flex flex-col bg-blue-300  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-40 m-6' src="./images/form.png" alt='error loading'/>
            
            <h2 className=' bg-white text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Form</h2>


        </div>


        <div className='flex flex-col bg-gray-700  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52'>
            
            <img className='h-40 m-6' src="./images/slotmachine.png" alt='error loading'/>
            
            <h2 className=' bg-white  text-center pb-2 hover:bg-gray-200 transition- all duration-500 text-black cursor-pointer px-2'>Slot Machine Game</h2>

        </div>

        </div>
    )


        </div>
    )
}

export default Cards2;

