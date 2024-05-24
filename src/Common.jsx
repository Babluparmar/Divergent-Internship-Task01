import React from 'react'
import Home from './pages/home/Home';
import { Link } from 'react-router-dom';
import Login from './pages/login_page/Login';

export const Common = ({login}) => {
  return (
    <div>
        {
            login
            ?
            <Home/>
            :
            <Login/>
        }
        {/* <Link to={'/home-page'}>Home-page</Link>
        <Link to={'/login-page'}>login-page</Link> */}
    </div>
  )
}

export  default Common;