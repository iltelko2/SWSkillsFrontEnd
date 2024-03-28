import { Outlet } from "react-router-dom"
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
                            <a href={PathConstants.Index} className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item hide">
                            <a href={PathConstants.Hobbies} className="nav-link">
                                My Hobbies
                            </a>
                        </li>
                        <li className="nav-item hide">
                            <a href={PathConstants.Character} className="nav-link">
                                My Work Persona
                            </a>
                        </li>
                        <li className="nav-item hide">
                            <a href={PathConstants.Cv} className="nav-link">
                                My Downloadable CV
                            </a>
                        </li>
                        <li className="nav-item hide">
                            <a href={PathConstants.Links} className="nav-link">
                                My Social Media Links
                            </a>
                        </li>
                        <li className="nav-item hide">
                            <a href={PathConstants.License} className="nav-link">
                                Licenses Of This Site
                            </a>
                        </li>
                        <li className="nav-item hide">
                            <a href={PathConstants.Contact} className="nav-link">
                                How To Contact Me
                            </a>
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