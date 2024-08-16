import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav-links">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </div>
  )
}
export default Navbar
