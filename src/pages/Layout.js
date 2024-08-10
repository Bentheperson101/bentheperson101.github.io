import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation();

    return(
        <>
            <div class="p-3 sticky-top">
                <Link className="logo" to="/">
                    <img src="logo.png" alt="Logo" style={{width: 40}}></img>
                </Link>
            </div>
            <div className="title text-center p-3">
                <h1>Hello World, I Am Benjamin Kosty!</h1>
                <h5>Welcome to my website, feel free to explore all the pages!</h5>
            </div>

            <nav class="navbar navbar-expand-sm sticky-top">
              <div class="container-fluid">
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav mx-auto">
                        <li class={location.pathname === "/" ? "nav-item current-page" : "nav-item"}>
                            <Link className="nav-link mx-3" to="/">Home</Link>
                        </li>
                        <li class={location.pathname === "/AboutMe" ? "nav-item current-page" : "nav-item"}>
                            <Link  className="nav-link mx-3" to="/AboutMe">About Me</Link>
                        </li>
                        <li class={location.pathname === "/Works" ? "nav-item current-page" : "nav-item"}>
                            <Link  className="nav-link mx-3" to="/Works">Works</Link>
                        </li>
                        <li class={location.pathname === "/Contact" ? "nav-item current-page" : "nav-item"}>
                            <Link  className="nav-link mx-3" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
              </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;