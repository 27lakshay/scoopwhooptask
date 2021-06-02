import React, { useState, useEffect } from "react";

const NavbarBottom = () => {
    const [bottomNavVisibility, setBottomNavVisibility] = useState("0");

    useEffect(() => {
        window.addEventListener("scroll", (e) => handleNavigation(e));
    });

    let prev = window.scrollY;
    function handleNavigation(e) {
        const window = e.currentTarget;
        if (prev > window.scrollY) {
            setBottomNavVisibility("0px");
        } else if (prev < window.scrollY) {
            setBottomNavVisibility("-100px");
        }
        prev = window.scrollY;
    }

    const bottomNavOptions = ["Trending", "Videos", "Stories", "Quizzes", "Memes"];

    return (
        <nav className="mobile_nav_bottom" style={{ bottom: bottomNavVisibility }}>
            <ul className="nav_bottom_options">
                {bottomNavOptions.map((option) => (
                    <li className="mobile_nav_bottom_option">
                        <a href="#"><span>{option}</span></a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarBottom;
