import React from 'react'
import '../login_page/Login.css'
const Ragister = () => {
  return (
    <div className="w-screen flex items-center justify-center h-screen">
        <div className="h-2/3  w-3/12 pl-4 border-2 rounded-lg border-solid">
        <div className='mt-8'>
          <h1 className='font-bold  text-2xl'>Register</h1>
          <h3 className='text-1xl text-gray-600'>Lets get you on board</h3>
        </div>
        <form>
          <div className='flex flex-col gap-5 mt-4'>
            <input type="gmail" placeholder='Enter Gmail' className='inputbox' name='gmail' />
            
            <input type="password" placeholder='Enter Password' className='inputbox' name='pass' />
          </div>
          <button className='inputbox bg-blue-700 text-white hover:bg-blue-800 mt-5'>Register</button>
        </form>
        <p className='text-center mt-6 text-gray-500 text-xs'>Already have an account? <span className='font-bold text-blue-500 cursor-pointer'>Sign In</span></p>
        </div>
    </div>
  )
}

export default Ragister