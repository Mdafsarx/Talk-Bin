import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home";
import Layout from "../Layout/Layout";
import Chat from "../Page/Chat/Chat";
import Notification from "../Page/Notification/Notification";
import About from "../Page/About/About";
import Setting from "../Page/Setting/Setting";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/chat',
                element:<Chat/>
            },
            {
                path:'/notification',
                element:<Notification/>
            },
            {
                path:'/about-us',
                element:<About/>
            },
            {
                path:'/setting',
                element:<Setting/>
            }
        ]
    }
])