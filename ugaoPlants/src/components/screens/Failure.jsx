import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai' // Use React Icons for better control

const Failure = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="text-center bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <div className="">
          <svg
            className="w-10 h-10 mx-auto text-red-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-red-600 mb-4 animate-fadeIn">Payment Failed</h1>
        <p className="text-gray-600 mb-6 animate-fadeIn">There was an issue processing your payment. Please try again later.</p>
        <a href="/retry" className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition duration-300">
          Retry Payment
        </a>
      </div>
    </div>
  )
}

export default Failure
