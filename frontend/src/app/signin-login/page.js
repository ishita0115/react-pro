'use client'
// pages/SignInSignUp.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function SignInSignUp() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 w-full max-w-4xl">
        <div className="form-container sign-up-container bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">Create Account</h1>
          
          <span className="mb-4">or use your email for registration</span>
          <div className="infield mb-4">
            <input type="text" placeholder="Name" className="bg-gray-100 p-2 w-full outline-none" />
          </div>
          <div className="infield mb-4">
            <input type="email" placeholder="Email" className="bg-gray-100 p-2 w-full outline-none" />
          </div>
          <div className="infield mb-4">
            <input type="password" placeholder="Password" className="bg-gray-100 p-2 w-full outline-none" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign Up</button>
        </div>
        <div className="form-container sign-in-container bg-[#0082cc] text-white rounded-tr-2xl rounded-br-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">Sign In</h1>
          
          <span className="mb-4">or use your account</span>
          <div className="infield mb-4">
            <input type="email" placeholder="Email" className="bg-gray-100 p-2 w-full outline-none" />
          </div>
          <div className="infield mb-4">
            <input type="password" placeholder="Password" className="bg-gray-100 p-2 w-full outline-none" />
          </div>
          <a href="#" className="forgot mb-4">Forgot your password?</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign In</button>
        </div>
      </div>
      <footer className="text-center absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <mark>See more on <a href="https://www.youtube.com/channel/UCHIkJZkap10qGFHq5ViIExg" className="text-blue-500">Karacode</a></mark>
      </footer>
    </div>
  );
}
