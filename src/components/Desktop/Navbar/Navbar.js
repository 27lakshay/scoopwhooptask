import React from "react";
// import ReactLogo from './logo.svg';

const Navbar = () => {
  
    return (
        <nav className="navbar_top">
            <div className="navbar_left">
                <div className="navbar_brand">
                    <a>
                        <img  width="92" height="68" src="/images/full_logo.svg" />
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
            {/* <div className="navbar_right">
                <ul className="navbar_options">
                    <li>BOOKMARK</li>
                    <li>LOGIN</li>
                    <li>SEARCH</li>
                    <li>MENU</li>
                </ul>
            </div> */}
        </nav>
    );
};

export default Navbar;
