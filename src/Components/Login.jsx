import React from 'react'

const Login = () => {
    return (
       <>

              {/* <img
      src="./images/wave.png"
      className="fixed hidden lg:block inset-0 h-full"
      style="z-index: -1;"
    /> */}
    <div
      className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
    >
      <img
        src="./images/unlock.svg"
        className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
      />
      <form className="flex flex-col justify-center items-center w-1/2">
        <img src="./images/avatar.svg" className="w-32" />
        <h2
          className="my-8 font-display font-bold text-3xl text-gray-700 text-center"
        >
          Welcome to you
        </h2>
        <div class="relative">
          <i class="fa fa-user absolute text-primarycolor text-xl"></i>
          <input
            type="text"
            placeholder="username"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
        </div>
        <div class="relative mt-8">
          <i class="fa fa-lock absolute text-primarycolor text-xl"></i>
          <input
            type="password"
            placeholder="password"
            class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
          />
          <button className='mt-2 py-2 px-24 bg-gray-200 border-2'>Login</button>
        </div>
        <a href="#" class="self-end mt-4 text-gray-600 font-bold"
          >Forgot password?</a
        >
        
       
      </form>
    </div>


        </>
    )
}

export default Login
