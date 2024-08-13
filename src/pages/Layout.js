import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    return(
        <>
            <div className="title">
                <div className="text-center p-3">
                    <h1>Benjamin Kosty</h1>
                    <h5>Computer Science Student - <i>Bringing dreams to reality</i></h5>
                </div>
            </div>

            <nav class="navbar sticky-top">
                    <ul class="navbar-nav mx-auto">
                        <li class={location.pathname === "/" ? "nav-item current-page" : "nav-item"}>
                            <Link className="nav-link mx-3" to="/">
                                <svg viewBox="0 0 150 150" className="me-2 icon icon-lines">
                                    <polyline points="15 50, 15 140, 5 140, 55 140, 55 80, 95 80, 95 140, 145 140, 135 140, 135 50"></polyline>
                                    <polyline points="145 57, 75 5, 5 57"></polyline>
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li class={location.pathname === "/AboutMe" ? "nav-item current-page" : "nav-item"}>
                            <Link  className="nav-link mx-3" to="/AboutMe">
                                <svg viewBox="0 0 150 150" className="me-2 icon">
                                    <circle r="70" cx="75" cy="75" className="icon-lines"></circle>
                                    <text x="45" y="110" font-size="110" className="icon-text">i</text>
                                </svg>
                                About Me
                            </Link>
                        </li>
                        <li class={location.pathname === "/Works" ? "nav-item current-page" : "nav-item"}>
                            <Link  className="nav-link mx-3" to="/Works">
                                <svg viewBox="0 0 150 150" className="me-2 icon">
                                    <polyline points="140 10, 130 20, 120 50, 100 30, 130 20, 100 30, 40 90, 60 110, 120 50, 80 90, 85 95,
                                    80 130, 20 70, 55 65, 60 70" className="icon-lines"></polyline>
                                    <line x1="10" y1="130" x2="35" y2="105" className="icon-lines"></line>
                                    <line x1="20" y1="140" x2="45" y2="115" className="icon-lines"></line>
                                </svg>
                                Works
                            </Link>
                        </li>
                    </ul>
            </nav>
            
            <Outlet />
        </>
    )
};

export default Layout;