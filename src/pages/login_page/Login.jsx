import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  // const [usererr, setUsererr] = useState(false)
  // const [passwordErr, setPasswordErr] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPasssword] = useState("")
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const fromHandler = (e) => {

    if (password == localStorage.getItem(user)) {
      setLogin(true);
      navigate('/home')
    }
    else {
      setLogin(false);
    }
    e.preventDefault();
  }


  return (
    <div className="w-screen flex items-center justify-center h-screen">
      <div className="h-2/3  w-3/12 pl-4 border-2 rounded-lg border-solid">
        <div className='mt-5'>
          <h1 className='font-bold  text-2xl'>Login</h1>
          <h3 className='text-1xl text-gray-600'>to get started</h3>
        </div>
        <form onSubmit={fromHandler}>
          <div className='flex flex-col gap-5 mt-4'>
            <input type="gmail" placeholder='User_ID' className='inputbox' name='gmail' onChange={(e)=>{setUser(e.target.value)}} />
            <input type="password" placeholder='Password' className='inputbox' name='pass' onChange={(e)=>{setPasssword(e.target.value)}} />
            </div>
          <p className='mt-1 mb-5 text-gray-500 text-sm'>Forgot Password?</p>
          <button className='inputbox bg-blue-700 text-white hover:bg-blue-800' >
            Continue</button>
        </form>
        <p className='text-center mt-5 text-xs cursor-pointer'>New User? <span className='font-bold'>Register</span></p>
      </div>
    </div>
  )
}

export default Login