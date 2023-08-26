import { createBrowserRouter } from "react-router-dom"
import Layout from './pages/Layout'
import ErrorPage from "./pages/ErrorPage"
import User from "./pages/User"
import HomePage from "./pages/HomePage"

export const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            path: "userpage",
            element: <User/>
        },
        {
            path: "/",
            element: <HomePage/>
        }
    ]
}])