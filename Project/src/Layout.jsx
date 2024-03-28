import { Outlet, Link } from "react-router-dom"
import PathConstants from "./routes/pathConstants.js"
import toggleMenu from "./assets/js/toggleMenu.js"

export default function Layout() {
    return (
        <>
            <header>
                <div className="menu-btn open" onClick={toggleMenu}>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>

                <nav className="menu hide">
                    <div className="menu-portrait hide">
                        <div className="portrait"></div>
                    </div>
                    <ul className="menu-nav hide">
                        <li className="nav-item current hide">
                            <Link to={PathConstants.Index} className="nav-link" onClick={toggleMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item hide">
                            <Link to={PathConstants.Hobbies} className="nav-link" onClick={toggleMenu}>
                                My Hobbies
                            </Link>
                        </li>
                        <li className="nav-item hide">
                            <Link to={PathConstants.Character} className="nav-link" onClick={toggleMenu}>
                                My Work Persona
                            </Link>
                        </li>
                        <li className="nav-item hide">
                            <Link to={PathConstants.Cv} className="nav-link" onClick={toggleMenu}>
                                My Downloadable CV
                            </Link>
                        </li>
                        <li className="nav-item hide">
                            <Link to={PathConstants.Links} className="nav-link" onClick={toggleMenu}>
                                My Social Media Links
                            </Link>
                        </li>
                        <li className="nav-item hide">
                            <Link to={PathConstants.License} className="nav-link" onClick={toggleMenu}>
                                Licenses Of This Site
                            </Link>
                        </li>
                        <li className="nav-item hide">
                            <Link to={PathConstants.Contact} className="nav-link" onClick={toggleMenu}>
                                How To Contact Me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Copyright &copy; Ilkka Korhonen 2024</p>
                <p>Contact: iltelko@icloud.com, +358 40 2186 779</p>
            </footer>
        </>
    )
}