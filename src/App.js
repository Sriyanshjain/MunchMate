import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header"
import { Body } from "./components/Body";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import About from "./components/About"
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import 'keen-slider/keen-slider.min.css'

//Chunking
//Lazy-loading
//Code-splitting
//Dynamic Bundling
//On demand loading
//dynamic importing
const Grocery=lazy(()=>{
   return  import("./components/Grocery")
})
const AppLayout=()=>{
    
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                
            },
            {
                path:"/about",
                element:<About/>,
                
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
        ],
        errorElement:<Error/>
    }
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
