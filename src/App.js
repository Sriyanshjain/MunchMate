import React from "react";

import {Header} from "./components/Header"

import { Outlet } from "react-router-dom";

import 'keen-slider/keen-slider.min.css'
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";

import appStore from "./utils/store/appStore";
import { Footer } from "./components/Footer";
//Chunking
//Lazy-loading
//Code-splitting
//Dynamic Bundling
//On demand loading
//dynamic importing


const App=()=>{
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:"Sriyansh Jain"}}>
        <div className="app">
           
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
export default App;