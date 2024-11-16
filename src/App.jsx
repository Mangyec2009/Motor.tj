import React, { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './shared/Layout/Layout'
import Home from './pages/Home/Home'
import Loading from './shared/Loading/Loading'
import { About, Contact } from './app/routes/router'
import ById from './pages/productByid/ById'

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
                    path: "contact",
                    element: <Suspense faalback={<Loading />}>
                        <Contact />
                    </Suspense>
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