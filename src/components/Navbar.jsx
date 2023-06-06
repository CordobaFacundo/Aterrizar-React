
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
      navigate('/login', {
          replace: true
      });
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light p-2">

        <Link
          className="navbar-brand"
          to="/"
        >
          Aterrizar
        </Link>

        <div className="navbar-collapse">
          <div className="navbar-nav">

            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/"
            >
              Paquetes
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/"
            >
              Bariloche
            </NavLink>

            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <span className='nav-item nav-link text-primary'>
              Facundo
            </span>
            <button
              className='nav-item nav-link btn'
              onClick={onLogout}>
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </>
  )
}
