import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Components/About";
import Media from "../Components/Media";
import News from "../Components/News";
import Purchase from "../Components/Purchase";
import SocialMedia from "../Components/SocialMedia";
import ContactUs from "../Components/ContactUs";
const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/media',
                element:<Media/>,
            },
            {
                path:'/news',
                element:<News/>,
            },
            {
                path:'/purchase',
                element:<Purchase/>,
            },
            {
                path:'/social',
                element:<SocialMedia/>,
            },
            {
                path:'/contact',
                element:<ContactUs/>,
            },
        ]
    }
])
export default 