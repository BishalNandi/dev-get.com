import React from 'react'

const Secondsection = () => {
    return (
        <>
         <hr className="border-2 bg-green-500"/>
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

export default Secondsection;
