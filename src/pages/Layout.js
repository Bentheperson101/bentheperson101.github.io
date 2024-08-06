import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav class="navbar navbar-expand-sm navbar-dark">
              <div class="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="logo.png" alt="Logo" style={{width: 40}}></img>
                    <b className="ms-2 nav-title">BenjiWeb</b>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link ms-3" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link ms-3" to="/History">History</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link ms-3" to="/Projects">My Projects</Link>
                        </li>
                        <li class="nav-item">
                            <Link  className="nav-link ms-3" to="/Contact">Contact Me</Link>
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