import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const from =location.state?.from?.pathname || '/'
    
    const {signIn, resetPassword, signInWithGoogle, signInWithGithub} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
    
        const email = event.target.email.value
        const password = event.target.password.value
    
        signIn(email, password)
          .then(result => {
            toast.success('Login Successful !')
            navigate(from, { replace: true })
            console.log(result.user)
          })
          .catch(error => toast.error(error.message))
      }
    
      // Google Signin
      const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
          console.log(result.user)
          navigate(from, { replace: true })
        })
      }

      //Github signin
      const handleGithubSignin = () => {
        signInWithGithub().then(result => {
            toast.success('signed in with github')
            navigate(from, {replace: true})
        })
      }
    
      //Reset Pass
      const handleReset = () => {
        resetPassword(userEmail)
          .then(() => {
            toast.success('Reset link has been sent, please check email')
          })
          .catch(error => toast.error(error.message))
      }

    return (
        <div className='ml-40 mr-40 mt-20 md:mx-96'>
            <div className="">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input onBlur={event => setUserEmail(event.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Please enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Log In
                        </button>
                        <button
                        onClick={handleReset}
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Forgot Password?
                        </button>
                    </div>
                    <div>
                        <p>Login with</p>
                        <div className="mb-3">
                            <button className='mr-4' onClick={handleGoogleSignin}><FcGoogle></FcGoogle></button> 
                            <button onClick={handleGithubSignin}><FaGithub></FaGithub></button>
                        </div>
                    </div>
                    <p className='text-sm'>Don't have an account? Please <Link to= '/register' className='font-bold  text-blue-500 hover:text-blue-800'>Register</Link></p>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2022 EduHub. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;