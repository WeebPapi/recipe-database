import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="site-logo">
        <img
          className="logo-icon"
          src="/cutlery-plate-svgrepo-com.svg"
          alt="site_logo"
        />
        <p className="logo-text">Recipefinder</p>
      </div>
      <div className="nav-links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
      </div>
    </nav>
  )
}
export default Navbar
