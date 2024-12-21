import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify'
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';

const Register = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const {createUser, updateName, verifyEmail, signInWithGoogle, signInWithGithub} = useContext(AuthContext)

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

    // signup using email and pass
    const handleSubmit = event => {
        event.preventDefault()
    
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    
        //1. Create Account
        createUser(email, password)
          .then(result => {
            console.log(result.user)
    
            //2. Update Name
            updateName(name)
              .then(() => {
                toast.success('Name Updated')
    
                //3. Email verification
                verifyEmail()
                  .then(() => {
                    toast.success('Please check your email for verification link')
                    navigate(from, { replace: true })
                  })
                  .catch(error => {
                    toast.error(error.message)
                  })
              })
              .catch(error => {
                toast.error(error.message)
              })
          })
          .catch(error => console.log(error))
      }

    return (
        <div>
            <div className='ml-40 mr-40 mt-20 md:mx-96'>
                <div className="">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Please enter your full name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Photo URL
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='photo' type="text" placeholder="Please enter your photo URL here" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='email' type="text" placeholder="Please enter your email" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password"
                            name='passowrd' type="password" placeholder="******************" />
                            <p className="text-red-500 text-xs italic">Please choose a password carefully.</p>
                        </div>
                        <button className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                        <p>Login with</p>
                        <button className='mr-4' onClick={handleGoogleSignin}><FcGoogle></FcGoogle></button>
                        <button onClick={handleGithubSignin}><FaGithub></FaGithub></button>
                        <p className='text-sm'>Already have an account? Please <Link to='/login' className='font-bold  text-blue-500 hover:text-blue-800'>Login</Link></p>
                    </form>
                    
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2022 EduHub. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;