import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog";
import Category from "../../components/Pages/Category/Category";
import Courses from "../../components/Pages/Category/Courses/Courses";
import Faq from "../../components/Pages/Faq/Faq";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login/Login";
import Register from "../../components/Pages/Login/Register/Register";
import PremiumAccesCard from "../../components/PremiumAccesCard/PremiumAccesCard";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://e-learning-server-side-omega.vercel.app/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://e-learning-server-side-omega.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://e-learning-server-side-omega.vercel.app/courses/${params.id}`)
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
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><PremiumAccesCard></PremiumAccesCard></PrivateRoute>,
                loader: ({ params }) => fetch(`https://e-learning-server-side-omega.vercel.app/courses/${params.id}`)

            }

        ]
    },
    {
        path: '*',
        element: <div>Page Not Found. Error 404</div>
    }
])