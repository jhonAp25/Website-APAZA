import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import NotFound from '../pages/NotFound'
import LayoutIndex from '../layout/LayoutIndex'

export const routers = createBrowserRouter ([
    {
        path : "/home",
        element: <LayoutIndex/>,
        errorElement: <NotFound/>,
        children: [ 
            {  
                path: "/home/hom",
                element: <Home/>
               
            },{
                path: "/home/jogger",
                element: <ProductPage/>
            
        }]
    },
   
])
