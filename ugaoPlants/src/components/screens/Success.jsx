import React from 'react'

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
        <div className="mb-6">
          <svg className="w-16 h-16 mx-auto text-green-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-green-600 mb-4 animate-fadeIn">Payment Successful!</h1>
        <p className="text-gray-600 mb-6 animate-fadeIn">Your transaction has been completed successfully.</p>
        <a href="/" className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300">
          Go to Home
        </a>
      </div>
    </div>
  )
}

export default Success
