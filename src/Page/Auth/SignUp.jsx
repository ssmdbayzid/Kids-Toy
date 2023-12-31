import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import img from '../../assets/image/signup vactor.png'
import useAuth from '../../Hooks/useAuth';


const SignUp = () => {
    const {createUser} = useAuth()
    const handleSignUp  = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
  return (
    <div className='max-w-[1170px] mx-auto flex-1 flex items-center justify-center md:h-[80vh]'>
            <div className="w-full md:w-1/2 bg-blue-200 p-2">
                <form onSubmit={handleSignUp} className='w-full'>
                    <div className='relative'>
                        <p className='text-xl text-blue-500 font-bold '>Walmart
                        </p>
                        <span className='absolute top-4 left-20 w-4 h-4 bg-yellow-300 rounded-full'></span>
                    </div>
                    <p className='text-5xl font-bold font-sans mb-10'>Sign Up</p>
                    <div>
                        <label htmlFor="email" className='font-semibold '>Email</label>
                        <br />
                        <input type="email" name='email' id='email'
                            className='w-full mt-4 py-2 md:py-4 rounded-lg focus:border focus:border-blue-300 border-gray-600 border-1 mb-3'
                            placeholder='example@gmail.com' />
                    </div>
                    <div>
                        <label htmlFor="password" className='font-semibold' >Password</label>
                        <br />
                        <input type="password" name='password' id='password'
                            className='w-full mt-4 py-2 md:py-4 rounded-lg focus:border focus:border-blue-300 border-gray-600 border-1'
                            placeholder='example@gmail.com' />
                    </div>
                    <p className='text-gray-500 my-3'>Forgot Password ?</p>
                    <button className='w-full py-2 bg-blue-500 text-white font-light text-xl my-3'>Sign Up</button>
                </form>
                <div className="inline-flex items-center justify-center w-full ">
                    <hr className="w-1/3 h-1 my-8 bg-gradient-to-r from-blue-100 via-blue-500 to-yellow-300 border-0 rounded dark:bg-gray-700" />
                    <p className='mx-3 text-lg'>Or Signup With</p>
                    <hr className="w-1/3 h-1 my-8 bg-gradient-to-r from-yellow-300 via-blue-500 to-blue-100 border-0 rounded dark:bg-gray-700" />   
                </div>
                <div className='flex justify-between gap-5'>
                <div 
                className='flex items-center justify-center gap-3 border border-blue-400 py-2 px-2 w-full rounded-md hover:bg-slate-200 cursor-pointer'>
                    <FcGoogle className='text-3xl' />
                    <span className='text-xl'>Google</span>
                </div>                    
                <div 
                className='flex items-center justify-center gap-3 border border-blue-400 py-2 px-2 w-full rounded-md hover:bg-slate-200 cursor-pointer'>
                    <FaFacebookF className='text-3xl text-blue-600' />
                    <span className='text-xl'>Facebook</span>
                </div>                    
                </div>
            </div>
            <div className='hidden md:block md:w-1/2'>
                <img src="https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg" alt="" />
            </div>
        </div>
  )
}

export default SignUp