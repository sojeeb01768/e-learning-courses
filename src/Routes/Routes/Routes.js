import { createBrowserRouter } from "react-router-dom";
import Category from "../../components/Pages/Category/Category";
import Courses from "../../components/Pages/Category/Courses/Courses";
import Home from "../../components/Pages/Home/Home";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element:<Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])