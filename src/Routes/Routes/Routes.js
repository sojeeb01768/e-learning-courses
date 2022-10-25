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
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/courses/:id',
                element:<Courses></Courses>
            }
        ]
    }
])