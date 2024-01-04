import React from 'react';
import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './utils/store';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Rockets from './Pages/Rockets'
import Capsules from './Pages/Capsules'
import './index.css';
import ObjectDisplay from './Pages/objectDisplay';

const Applayout = () =>{
    return(
        <Provider store={store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
    )
}


const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Rockets",
            element: <Rockets />,
        },
        {
            path: "/Capsules",
            element: <Capsules />,
        },
        {
            path: "/test",
            element: <ObjectDisplay />,
        }
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);