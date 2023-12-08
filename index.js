import Cart from "./src/components/Cart";
import Shimmer from "./src/components/Shimmer";
import { Body } from "./src/components/Body";
import ReactDOM from "react-dom/client";
import { lazy, Suspense} from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import ContactUs from "./src/components/ContactUs";
import About from "./src/components/About"
import RestaurantMenu from "./src/components/RestaurantMenu";
import App from "./src/App";
const Grocery=lazy(()=>{
    return  import("./src/components/Grocery")
 })
 const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
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
                path:"/cart",
                element:<Cart/>
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
