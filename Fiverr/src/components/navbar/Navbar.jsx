import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const user = {
    id: 1,
    name: 'Akhil',
    isSeller: true,
  }

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', isActive)

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  }, [])

  return (
    <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
            <span className="dot">.</span>
          </Link>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          {!user && <span>Sign In</span>}
          {!user.isSeller && <span>Become a Seller</span>}
          {!user && <button>Join</button>}
          {user && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="" alt="" />
              <span>{user.name}</span>
              {open && (
                <div className="options">
                  {!user.isSeller && (
                    <>
                      <Link to="/add" className="link">
                        Add new Gig
                      </Link>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link to="/" className="link">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== '/' && (
          <>
            <hr />
            <div className="menu">
              <span>lorem</span>
              <span>lorem</span>
              <span>lorem</span>
              <span>lorem</span>
              <span>lorem</span>
            </div>
          </>
        ))}
    </div>
  )
}

export default Navbar
