import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navBar "> 
            <div className="">
                <ul className="ulNav bg-amber-700">
                    <li className="liNav"><a href="#">Home</a></li>
                    <li className="liNav"><a href="#">About</a></li>
                    <li className="liNav"><a href="#">Contact</a></li>
                    <CartWidget className="cartWidget"/>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar