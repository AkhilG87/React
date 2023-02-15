import React from 'react'
import './App.scss'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Add from './Pages/add/Add'
import Gig from './Pages/gig/Gig'
import Gigs from './Pages/gigs/Gigs'
import Home from './Pages/home/Home'
import Message from './Pages/message/Message'
import Messages from './Pages/messages/Messages'
import MyGigs from './Pages/myGigs/MyGigs'
import Orders from './Pages/orders/Orders'

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/myGigs',
          element: <MyGigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
