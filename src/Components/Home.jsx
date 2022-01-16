import React from 'react'

const Home = () => {
    return (
       <>
    {/* FIRST SECTION    */}

    <main className='bg-gray-100 flex'>
                <div className='main py-8 px-20'>
                Find a Perfect   <br />
                    <div className=' py-2 text-4xl'>
                   Project Partner...
                    </div>
                    <p>A central location to find coders, Collab <br />and work on projects.An open platform <br />to get access  to mini projects,source code,<br />notes and weekly doubt clearing sessions.<br /> Also enroll for Internships and certificate courses!</p>
                    <div className='my-4'>
                        <button className='px-5 py-1 rounded-md shadow-md bg-blue-700 space-x-2 mx-2 text-white border-4 hover:text-indigo-50 '>Hire ProjectPartner</button>
                        
                        <button className='px-5 py-1 rounded-md text-violet-700 border-2 mx-2 border-pink-400  hover:bg-violet-500 hover:text-white'>Explore Works</button>
                    </div>
                </div>

            <div className='flex items-center'>
            <img className="" src="./images/dev1.jpg" alt="error loading" />
            </div>
            </main>

        {/* SECOND SECTION      */}

            <div className=' bg-white text-2xl py-4'>
            
            <h1 className=' font-bold  px-20'>What are you looking for ? 
            <button className='inline-block float-right  text-blue-700'>View all</button></h1>
            
            </div>

        {/* THIRD SECTION  */}

        <div className=' bg-white flex flex-wrap py-4 justify-center'>

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

            
        {/* FOURTH SECTION   */}


        <div>
             <hr className="border-2 bg-green-500"/>
            <h1 className=' font-extrabold  px-20 py-4 bg-white '>Popular Projects : 
            <button className='inline-block float-right  text-blue-700'>View all</button></h1>
            <div className=' bg-white flex flex-wrap justify-center'>

        <div className='flex flex-col bg-white  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52 border-4 border-gray-200 '>
            
            <img className='h-40 m-6 ' src="./images/calculator.png" alt='error loading'/>
            
            <h2 className=' bg-white text-center pb-2 hover:bg-gray-200 transition-all duration-500  text-black cursor-pointer px-2'>Calculator</h2>

        </div>


        <div className='flex flex-col bg-black rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52 border-4 border-gray-200'>
            
            <img className='h-40 m-6' src="./images/clock.png" alt='error loading'/>
            
            <h2 className=' bg-white  hover:bg-gray-200 text-center pb-2  transition-all duration-500 text-black cursor-pointer px-2'>Clock</h2>

        </div>

        <div className='flex flex-col bg-blue-300  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52 border-4 border-gray-200'>
            
            <img className='h-40 m-6' src="./images/form.png" alt='error loading'/>
            
            <h2 className=' bg-white text-center pb-2 hover:bg-gray-200 transition-all duration-500 text-black cursor-pointer px-2'>Form</h2>


        </div>


        <div className='flex flex-col bg-gray-700  rounded-lg shadow-md- w-full m-6 overflow-hidden sm:w-52 border-4 border-gray-200'>
            
            <img className='h-40 m-6' src="./images/slotmachine.png" alt='error loading'/>
            
            <h2 className=' bg-white  text-center pb-2 hover:bg-gray-200 transition- all duration-500 text-black cursor-pointer px-2'>Slot Machine Game</h2>

        </div>

        </div>
    


        </div>

        {/* FIFTH SECTION  */}


        <div className='flex  justify-center h-min w-screen  p-20 py-16'  >

<div className='bg-gray-100 py-2 px-2 rounded-lg'>

<img className='px-20' src="./images/pp.png" alt='error loading'/>


<h1 className='text-3xl font-bold'>Looking for some brilliant project partner ? </h1> <br/> <span> An open platform to find coders/project partners based on skills and projects. Showcase your work!</span> 

<div className='px-36 py-4 my-4'>
        <button className='px-10 border-pink-300 hover:bg-violet-500   rounded-md shadow-md bg-gray-200 space-x-2 mx-2 text-black border-4 hover:text-indigo-50 '>Hire ProjectPartner</button>
</div>

</div>

<div className='bg-teal-600 text-white rounded-lg  font-bold py-4 m-4 mx-10 '>
<h1>Grab the chances to get access to manny begginer friendly mini projects
along with source code, notes and doubt clearing ssessions. </h1> <br/>
 <span className='font-small'>

        This is not just a project partner finder portal, but also begginer friendly portal where begginers can start working with mini projects provided on the portal, also access the source code of the project , get notes and also enroll for doubt clearing sessions which are going on held on every weekend days on Google Meet Platform. 

 </span>
<div className='py-4 px-20'>
 <button className='px-6 border-pink-300 hover:bg-violet-500   rounded-md shadow-md bg-gray-200 space-x-2 mx-2 text-black border-4 hover:text-indigo-50 '>Create Profile</button>
</div>
</div>
</div>

       
       
       
       
       </>
    )
}

export default Home
        