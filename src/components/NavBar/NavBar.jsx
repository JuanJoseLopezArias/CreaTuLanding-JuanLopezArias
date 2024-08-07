import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="navBar bg-amber-100">
            <Link to="/" className="logoContainer">
                <img src="../img/logoEcommerce.png" alt="" />
            </Link>
            <div className="Categories">
                <NavLink to={"/category/Remeras"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={"/category/Pantalones"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={"/category/Buzos"} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Buzos</NavLink>
            </div>
            <div className="cartContainer">
                <CartWidget className="cartWidget liNav"/>
            </div>
        </nav>
    )
}
export default NavBar