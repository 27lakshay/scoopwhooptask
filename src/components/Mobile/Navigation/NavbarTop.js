import React from "react";

const NavbarTop = () => {
    return (
        <nav className="mobile_nav_top">
            <ul className="mobile_nav_top_options">
                <li className="mobile_nav_search">
                    <i className="fa-search fas fa-2x text-white"></i>
                </li>
                <li className="mobile_nav_logo">
                    <a href="#">
                        <img width="76" height="56" src="/images/small_logo_white.svg" />
                    </a>
                </li>
                <li className="mobile_nav_toggler">
                    <a href="#">
                        <i className="fas fa-2x text-white fas fa-bars"></i>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavbarTop;
