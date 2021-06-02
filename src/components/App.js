import "../scss/desktop.scss";
import "../scss/mobile.scss";
import Navbar from "./Desktop/Navbar/Navbar";
import NavbarSticky from "./Desktop/Navbar/NavbarSticky";
import Hero from "./Hero";
import ArticleContainer from "./Desktop/Articles/ArticleContainer";
import { BrowserView, MobileView } from "react-device-detect";
import NavbarTop from "./Mobile/Navigation/NavbarTop";
import NavbarBottom from "./Mobile/Navigation/NavbarBottom";
import ArticleContainerMobile from "./Mobile/Articles/ArticleContainerMobile";
import ArticleCarousel from "./Mobile/ArticleCarousel/ArticleCarousel";

function App() {
    return (
        <>
            <BrowserView>
                <div>
                    <header className="header-desktop">
                        <Navbar />
                        <NavbarSticky />
                        <Hero />
                        <div className="positioning_space"></div>
                    </header>
                    <ArticleContainer />
                </div>
            </BrowserView>
            <MobileView>
                <header className="header_mobile">
                    <NavbarTop />
                    <ArticleCarousel />
                </header>
                <NavbarBottom />
                <ArticleContainerMobile />
            </MobileView>
        </>
    );
}

export default App;
