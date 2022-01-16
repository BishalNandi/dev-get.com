import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Signup = () => {
    return (
        <section className='px-4 py-2'>
        <div className='px-60 py-4'>
            <div className='px-10 py-8'>
                <div className='signup-form'>
                <h2 className='text-blue-200 '>Sign up<hr/></h2>
                <form className="register-form" id='register-form'>
        
        {/* DIV'S OF SIGNUP PAGE STARTS HERE  */}

                    <div className='border-2 px-2'>
                        <label htmlFor="name">
                        <i class= " zmdi zmdi-account"></i>
                        </label>
                        <input className='px-2' type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"/>
                    </div>


                    <div className='border-2'>
                        <label htmlFor="email">
                        <i class="zmdi zmdi-email"></i>
                        </label>
                        <input className='px-2' type="email" name="email" id="email" autoComplete="off" placeholder="Your Email"/>
                    </div>


                    <div className='border-2'>
                        <label htmlFor="phone">
                        <i class="zmdi zmdi-phone"></i>
                        </label>
                        <input className='px-2' type="phone" name="phone" id="phone" autoComplete="off" placeholder="Your phone"/>
                    </div>


                    <div className='border-2'>
                        <label htmlFor="work">
                        <i class="zmdi zmdi-slideshow"></i>
                        </label>
                        <input className='px-2' type="text" name="work" id="work" autoComplete="off" placeholder="Your Profession"/>
                    </div>


                    <div className='border-2'>
                        <label htmlFor="password">
                        <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input className='px-2' type="password" name="password" id="password" autoComplete="off" placeholder="Your Password"/>
                    </div>

                    <div className='border-2'>
                        <label htmlFor="cpassword">
                        <i class="zmdi zmdi-lock"></i>
                        </label>
                        <input className='px-2' type="cpassword" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"/>
                    </div>

                    <div className=" text-blue-300 p-3">
                        <input className='px-2' type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                    </div>

                </form>
                </div>

        <div className='signup-image'>
            <figure>
                {/* <img src="#" alt="registration pic" /> */}
            </figure>
            <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
        </div>

            </div>
        
</div>


    </section>


    )
}

export default Signup
