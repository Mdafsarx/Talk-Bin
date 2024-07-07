import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Layout from "../Layout/Layout";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])