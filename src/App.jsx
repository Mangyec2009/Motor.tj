import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './shared/Layout/Layout'
import Loading from './shared/Loading/Loading'
import { About, Home } from './app/routes/router'
import ById from './pages/productByid/ById'
import "./App.css";
import AllProducts from './pages/Products/Products'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Suspense fallback={<Loading />}>
                <Layout />
            </Suspense>,
            children: [
                {
                    index: true,
                    element: <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>, 
                },
                {
                    path: "about",
                    element: <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                },
                {
                    path: "products",
                    element: <AllProducts /> 
                },
                {
                    path: "products/:id",
                    element: <ById />
                }
            ] 
        }
    ])
    return <>
    <RouterProvider router={router}></RouterProvider>
    </>
}

export default App