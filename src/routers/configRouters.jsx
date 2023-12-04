import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Home from '../pages/Home'
import ProductPage from '../pages/ProductPage'
import NotFound from '../pages/NotFound'
import LayoutIndex from '../layout/LayoutIndex'
import CategoryPage from '../pages/CategoryPage'

export const routers = createBrowserRouter ([
    {
        path : "/",
        element: <LayoutIndex/>,
        errorElement: <NotFound/>,
        children: [ 
            {  
                path: "/",
                element: <Home/>
               
            },{
                path: "/:category",
                element: <CategoryPage/>
            },{
                path: "/:category/:id",
                element: <ProductPage/>
            }
        ]
    },
   
])
