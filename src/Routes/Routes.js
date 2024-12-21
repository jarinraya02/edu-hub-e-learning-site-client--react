import { createBrowserRouter } from 'react-router-dom'
import Blog from '../components/Blog'
import CheckOut from '../components/CheckOut'
import CourseDetails from '../components/CourseDetails'
import Courses from '../components/Courses'
import ErrorPage from '../components/ErrorPage'
import FAQ from '../components/FAQ'
import Home from '../components/Home'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import Main from '../layout/Main'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: '/FAQ',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-ten-sever.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://assignment-ten-sever.vercel.app/courses/${params.id}`)
            },
            {
                path: '/courses/:id/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-ten-sever.vercel.app/courses/${params.id}`)
            }
        ]
    }
])
