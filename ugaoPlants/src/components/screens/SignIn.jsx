// import { useState } from "react"
import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SummaryApi from "../../common/Index";
import { toast } from "react-toastify";
import Context from '../../context';




function SignIn() {
   const [showPassword, setShowPassword] = useState(false)
   const [data,setData]= useState({
    email : "",
    password : ""
   })
   const navigate = useNavigate()
  const {fetchUserDetails , fetchUserAddtoCart} = useContext(Context)
// console.log("generalContext",generalContext.fetchUserDetails())
   const handleOnChange = (e) => {
    const {name , value} = e.target
    setData((preve)=> {
      return{
        ...preve,[name] : value
      }
    })
   }

   const handleSubmit = async  (e) => {
      e.preventDefault()
      const  dataResponse = await fetch(SummaryApi.signIn.url, 
        {
          method : SummaryApi.signIn.method,
          credentials :"include",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
        }
      )
      const dataApi = await dataResponse.json()
      if(dataApi.success){
        toast.success(dataApi.message)
        navigate('/')
        fetchUserDetails()
        fetchUserAddtoCart()
      }
      if(dataApi.error){
        toast.error(dataApi.message)
      }
   }

   console.log(data)
    
  return (
    <div className='pt-5'>
        {/* <h2 className="text-center bg-success m-0 pt-4 text-light text-underline">Admin</h2> */}
        <div className="container-fluid d-flex justify-content-center align-item-center  form-cont h-100 mt-5" >
            
        <div className="form-container bg-white border rounded-4 p-4 m-4 form-cont01 shadow">
          <h2 className="form-title text-center card-heading ">
            <span className="about-text">Sign in </span>
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="mb-3"> 
              <label for="email" className="form-label input-headings">
               Email Id
              </label>
              <input
                type="email"
                className="form-control input-custom"
                id="email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                placeholder="Enter your Email id"
              />
            </div>
            <div className="mb-3">
              <label for="pswd" className="form-label input-headings">
                Password
              </label>
             <div className="input-password d-flex border rounded">
             <input
                type={showPassword ? "" : "password"} 
                className="form-control input-custom border-0"
                id="pswd"
                name='password'
                value={data.password}
                onChange={handleOnChange}
                placeholder="Enter your password"
              />
              <div className='cursor-pointer px-1 mt-2 bg-white' onClick={()=> setShowPassword((preve)=> !preve)}>
                <span>
                   {
                    showPassword ? (
                      <i className="fa-solid fa-eye-slash"></i>
                    )
                    : 
                    (
                      <i className="fa-regular fa-eye"></i>
                    )
                   }


                
                </span>
              </div>
             </div>
            </div>
            <div className="mb-3">
              <label for="checkbox" className="form-label input-headings">
              {/* <input className="form-check-input " type="checkbox" value="" aria-label="Checkbox for following text input"/> */}
              <div className='text-end'>
                <Link className='  text-success'>Forgot Password </Link>
              </div>
              </label>
             
            </div>
            

            <button type="submit" className="btn btn-custom btn-success w-100">
              Submit
            </button>
           <div>Don't have account? <Link className=' text-success' to='/signup' >Sing Up</Link ></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn