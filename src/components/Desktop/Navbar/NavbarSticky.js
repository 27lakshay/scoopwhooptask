import React, { useState, useEffect } from "react";

const NavbarSticky = () => {
    const [navbarVisibilty, setNavbarVisibility] = useState("-100px");

    useEffect(() => {
        let elementId = document.getElementById("sticky_navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavbarVisibility("0px");
            } else {
                setNavbarVisibility("-100px");
            }
        });
    });

    return (
        <nav
            id="sticky_navbar"
            className="sticky_navbar navbar_top"
            style={{ top: navbarVisibilty }}
        >
            <div className="navbar_left">
                <div className="navbar_brand">
                    <a>
                        <img width="76" height="56" src="/images/small_logo.svg" />
                    </a>
                </div>
                <ul className="navbar_options">
                    <li>TRENDING</li>
                    <li>VIDEOS</li>
                    <li>STORIES</li>
                    <li>QUIZZES</li>
                    <li>MEMES</li>
                    <li>SPOTLIGHT</li>
                </ul>
            </div>
        </nav>
    );
};

export default NavbarSticky;
