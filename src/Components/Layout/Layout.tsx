import { Outlet } from "react-router-dom"
import React from "react"
import { Navbar, Footer } from "../"

const Layout: React.FC = () => {
  return (
    <div
      className="app-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
