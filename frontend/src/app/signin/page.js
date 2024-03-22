'use client'
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import Navbar from '../navbar/page';
 
export default function Login() {
  return (
    <> <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <head>
        <title>Login-Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full sm:w-2/3 max-w-4xl">
          <div className="w-full sm:w-3/5 p-5">
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-[#0082cc] mb-2'>Sign in for an Account</h2>
              <div className="border-2 w-10 border-[#0082cc] inline-block mb-2"></div>
              <div className='flex justify-center my-2'>
                <Link href="/" className='border-2 border-gray-300 rounded-full p-3 mx-1'>
                  <FaFacebookF className='text-black'/>
                </Link>
                <Link href="/" className='border-2 border-gray-300 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-black'/>
                </Link>
                <Link href="/" className='border-2 border-gray-300 rounded-full p-3 mx-1'>
                  <FaLinkedinIn className='text-black'/>
                </Link>
              </div>
              <p className='text-[#666] my-3'>or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-1'/>
                  <input type='text' name='name' placeholder='Name' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-1'/>
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-1'/>
                  <input type='password' name='password' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <div className='bg-gray-100 w-full sm:w-64 p-2 flex items-center'>
                  <MdLockOutline className='text-gray-400 m-1'/>
                  <input type='password' name='confirmPassword' placeholder='Confirm Password' className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <Link href="/" className='border-2 border-[#0082cc] rounded-full px-12 py-2 mt-4 inline-block font-semibold hover:bg-[#0082cc] hover:text-[#ffffff]'>Sign in</Link>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/5 bg-[#0082cc] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">Fill up personal Information and start journey with us.</p>
            <Link href="/login" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-[#035e92]'>Log in</Link>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
