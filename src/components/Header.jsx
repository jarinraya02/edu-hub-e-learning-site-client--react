import React from 'react';
import { toast } from 'react-toastify'
import { useContext } from 'react';
import { HiAcademicCap } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext';
import { useState } from 'react';

const Header = () => {

  const [theme, setTheme] = useState()

  const toggleTheme = () => {
    setTheme(!theme)
  }

  const { user, logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
      .then(toast.warning('user logged out'))
      .catch(error => console.log(error))
  }

  return (

    <div className="navbar bg-base-100">
      <div className="flex-none">
        <>
          <HiAcademicCap></HiAcademicCap>
        </>
      </div>
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Edu Hub</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/courses'>Courses</NavLink></li>
          <li><NavLink to='/FAQ'>FAQ</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>

          {
            user?.email ? (
              <>
                <button onClick={handleLogout} className="btn btn-outline btn-error">Logout</button>

                <img className=' border mx-3 w-10 h-10 rounded-full bg-gray-500 border-gray-700' src={user?.photoURL ? user.photoURL : 'NoImg'} alt="" />
              </>
            )
              :
              (
                <>
                  <li><NavLink to='/login'>Login</NavLink></li>
                  <li><NavLink to='/register'>Register</NavLink></li>
                </>
              )
          }

          <div>
            <button onClick={toggleTheme}> {!theme ? "Light" : 'Dark'} </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;