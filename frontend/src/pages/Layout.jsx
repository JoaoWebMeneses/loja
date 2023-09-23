import React from 'react'
import { Link as NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div id='corpoLayout'>
        <nav id='LayoutNavbar'>
            <NavLink
                id='Home'
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
                to="/"
            >
                Página Inicial
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
                to="/userpage"
            >
                Página do Usuário
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
                to="/loginpage"
            >
                Login
            </NavLink>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout